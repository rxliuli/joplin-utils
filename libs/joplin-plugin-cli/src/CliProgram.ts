import { build } from 'esbuild'
import * as path from 'path'
import { copy, move, readJson, writeJson } from 'fs-extra'
import { createArchive } from './utils/createArchive'
import { watch } from 'chokidar'
import { promise } from 'glob-promise'

export class CliProgram {
  constructor(
    private readonly config: {
      basePath: string
    },
  ) {}

  private async copyManifest() {
    await copy(
      path.resolve(this.config.basePath, 'src/manifest.json'),
      path.resolve(this.config.basePath, 'dist/manifest.json'),
    )
  }

  private async buildScripts(entryPoints: string[]) {
    await build({
      entryPoints: entryPoints,
      bundle: true,
      outdir: path.resolve(this.config.basePath, 'dist'),
      platform: 'node',
      sourcemap: 'external',
      format: 'cjs',
    })
  }
  private async buildScript(entryPoint: string) {
    await build({
      entryPoints: [entryPoint],
      bundle: true,
      outdir: path.resolve(this.config.basePath, 'dist'),
      platform: 'node',
      sourcemap: 'external',
      format: 'cjs',
    })
  }

  async build(isWatch: boolean): Promise<void> {
    const entryPoints = await promise(
      path.resolve(this.config.basePath, 'src/*.ts'),
    )
    await Promise.all([this.buildScripts(entryPoints), this.copyManifest()])
    if (isWatch) {
      await watch(['src/manifest.json', 'src/*.ts'], {
        cwd: this.config.basePath,
      }).on('change', async (filePath) => {
        if (filePath.endsWith('manifest.json')) {
          await this.copyManifest()
          console.info('copy manifest.json')
        } else if (filePath.endsWith('.ts')) {
          await this.buildScript(path.resolve(this.config.basePath, filePath))
          console.info('buildScript: ', filePath)
        }
      })
      return
    }
    const pkgName = (
      await readJson(path.resolve(this.config.basePath, 'package.json'))
    ).name
    await createArchive({
      sourceDir: path.resolve(this.config.basePath, 'dist'),
      destPath: pkgName + '.jpl',
    })
  }

  async generate(name: string): Promise<void> {
    const destPath = path.resolve(this.config.basePath, name)
    await copy(
      path.resolve(__dirname, '../templates/joplin-plugin-template'),
      destPath,
    )
    await move(
      path.resolve(destPath, '_.gitignore'),
      path.resolve(destPath, '.gitignore'),
    )
    const pkgPath = path.resolve(destPath, 'package.json')
    await writeJson(
      pkgPath,
      {
        ...(await readJson(pkgPath)),
        name,
      },
      {
        spaces: 2,
      },
    )
  }
}
