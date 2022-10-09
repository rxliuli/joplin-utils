import { groupBy } from 'lodash-es'
import { once } from '@liuli-util/async'

export interface Tag {
  id: string
  title: string
}

export interface Resource {
  id: string
  title: string
  raw: Buffer
}

export interface Note {
  id: string
  title: string
  content: string
  createAt: number
  updateAt: number
  tags: Tag[]
  resources: Resource[]
  path: string[]
}

export interface InputPlugin {
  name: string
  generate(): AsyncGenerator<Note>
}
export interface OutputPlugin {
  name: string
  config?(config: ConvertConfig): Promise<void>
  handle(note: Note): Promise<void>
}

export interface ConvertConfig {
  root?: string
  plugins: (InputPlugin | OutputPlugin)[]
}

export async function convert(options: ConvertConfig) {
  const p = groupBy(options.plugins, (item) => 'generate' in item)
  const inputs = (p['true'] ?? []) as InputPlugin[]
  const outputs = (p['false'] ?? []) as OutputPlugin[]
  if (inputs.length > 0) {
    for (const output of outputs) {
      await output.config?.(options)
    }
  }
  for (const input of inputs) {
    const generator = input.generate()
    for await (const note of generator) {
      for (const output of outputs) {
        await output.handle(note)
      }
    }
  }
}
