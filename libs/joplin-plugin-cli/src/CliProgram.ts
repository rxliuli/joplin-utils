import { build } from 'esbuild'
import * as path from 'path'
import { copy, move, readJson, writeJson } from 'fs-extra'
import { createArchive } from './utils/createArchive'
import { watch } from 'chokidar'

export class CliProgram {
  constructor(
    private readonly config: {
      basePath: string
    },
  ) {}

  async build(isWatch: boolean): Promise<void> {
    if (isWatch) {
      await Promise.all([
        build({
          entryPoints: [path.resolve(this.config.basePath, 'src/index.ts')],
          outdir: path.resolve(this.config.basePath, 'dist'),
          platform: 'node',
          sourcemap: 'external',
          format: 'cjs',
          watch: true,
          bundle: true,
        }),
        watch(path.resolve(this.config.basePath, 'src/manifest.json')).on(
          'all',
          async () => {
            await copy(
              path.resolve(this.config.basePath, 'src/manifest.json'),
              path.resolve(this.config.basePath, 'dist/manifest.json'),
            )
          },
        ),
      ])
      return
    }
    await build({
      entryPoints: [path.resolve(this.config.basePath, 'src/index.ts')],
      bundle: true,
      outdir: path.resolve(this.config.basePath, 'dist'),
      platform: 'node',
      sourcemap: 'external',
      format: 'cjs',
    })
    await copy(
      path.resolve(this.config.basePath, 'src/manifest.json'),
      path.resolve(this.config.basePath, 'dist/manifest.json'),
    )
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
