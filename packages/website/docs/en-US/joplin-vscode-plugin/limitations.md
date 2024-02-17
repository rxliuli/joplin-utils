# Limitations

Although the current plug-in has implemented the common functions of Joplin, there are some difficult to handle limitations. It is precisely because of these limitations that we did not use note plug-ins directly based on vscode.

- Unable to drag and drop notes, reference: <https://github.com/Microsoft/vscode/issues/32592>
- Unable to drag and drop files (such as images) into the editor to automatically create references, reference: <https://github.com/microsoft/vscode/issues/5240>
- Unable to preview audio and video, reference: <https://github.com/microsoft/vscode/issues/32540>
- Unable to customize the UI of the plugin, reference: <https://code.visualstudio.com/api/extension-capabilities/overview#no-dom-access>
- The default shortcut settings are quite complicated, you need to consider conflicts with existing shortcuts (currently temporary resolved by assigning them under the `ctrl+j` namespace)
