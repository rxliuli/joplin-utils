import { $, fs, glob } from 'zx'

await fs.remove('./api')
await $`pnpm degit laurent22/joplin/packages/generator-joplin/generators/app/templates/api/ ./api`
const files = await glob('./api/*.ts')
for (const file of files) {
  await fs.move(file, file.replace('api', 'src'), { overwrite: true })
}
await fs.remove('./api')
await $`pnpm prettier --write src`
