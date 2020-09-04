import {
  CancellationToken,
  Definition,
  DefinitionLink,
  DefinitionProvider,
  Position,
  ProviderResult,
  TextDocument,
} from 'vscode'

export class JoplinMarkdownProvider implements DefinitionProvider {
  provideDefinition(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
  ): ProviderResult<Definition | DefinitionLink[]> {
    console.log('provideDefinition: ', document, position, token)
    return undefined
  }
}
