import { ESBuildProgram } from '@liuli-util/cli'
import { remove } from 'fs-extra'
import path from 'path'

async function main() {
  await remove(path.resolve(__dirname, 'dist'))
  const isWatch = process.argv.includes('-w')
  const options = {
    base: __dirname,
    isWatch: isWatch,
  }
  const program = new ESBuildProgram(options)
  const deps = await ESBuildProgram.getDeps(options.base)
  const platform = await ESBuildProgram.getPlatform(options.base)
  const cliOptions = program.getBuildCliOption({
    deps: deps,
    platform: platform,
  })
  cliOptions.external = [...cliOptions.external, ...deps]
  const cli = {
    title: 'cli',
    task: () => program.build(cliOptions),
  }
  const { cjs, esm, dts } = await program.getTasks()
  await program.execTasks([cjs, esm, cli, dts])
}

main()
