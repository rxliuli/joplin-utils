import{_ as t,c as e,o as a,V as d,a7 as o,a8 as c,a9 as r}from"./chunks/framework.BjDc6e-2.js";const _=JSON.parse('{"title":"Other Features","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/joplin-vscode-plugin/feature.md","filePath":"en-US/joplin-vscode-plugin/feature.md"}'),i={name:"en-US/joplin-vscode-plugin/feature.md"},l=d('<h1 id="other-features" tabindex="-1">Other Features <a class="header-anchor" href="#other-features" aria-label="Permalink to &quot;Other Features&quot;">​</a></h1><h2 id="configuration-table" tabindex="-1">Configuration Table <a class="header-anchor" href="#configuration-table" aria-label="Permalink to &quot;Configuration Table&quot;">​</a></h2><table><thead><tr><th>Field</th><th>Default Value</th><th>Optional Value</th><th>Description</th></tr></thead><tbody><tr><td><code>token</code></td><td></td><td><code>string</code></td><td>Token for Joplin web service</td></tr><tr><td><code>baseUrl</code></td><td><code>http://localhost:41184</code></td><td><code>string</code></td><td>Base path of Joplin API</td></tr><tr><td><code>deleteConfirm</code></td><td><code>true</code></td><td><code>boolean</code></td><td>Confirm before deleting</td></tr><tr><td><code>sortNotes</code></td><td><code>false</code></td><td><code>boolean</code></td><td>Whether to sort notes</td></tr><tr><td><code>sortNotesType</code></td><td><code>alphabetical</code></td><td></td><td>Type of note sorting</td></tr><tr><td></td><td></td><td><code>alphabetical</code></td><td>Sort by alphabetical order of title</td></tr><tr><td></td><td></td><td><code>default</code></td><td>Joplin&#39;s default sorting</td></tr><tr><td><code>sortOrder</code></td><td><code>asc</code></td><td></td><td>Order of sorting (asc or desc)</td></tr><tr><td></td><td></td><td><code>asc</code></td><td>Ascending order</td></tr><tr><td></td><td></td><td><code>desc</code></td><td>Descending order</td></tr><tr><td><code>language</code></td><td><code>english</code></td><td></td><td>Display language of the plugin, follows VSCode</td></tr><tr><td></td><td></td><td><code>en</code></td><td>English</td></tr><tr><td></td><td></td><td><code>zh</code></td><td>Simplified Chinese</td></tr></tbody></table><h2 id="shortcuts" tabindex="-1">Shortcuts <a class="header-anchor" href="#shortcuts" aria-label="Permalink to &quot;Shortcuts&quot;">​</a></h2><ul><li><code>f2</code>: Rename notes or directories</li><li><code>delete</code>: Delete notes or directories</li><li><code>ctrl+alt+u</code>: Upload images from clipboard</li><li><code>ctrl+alt+e</code>: Upload images from file chooser</li><li><code>ctrl+alt+shift+e</code>: Add attachments from file chooser</li><li><code>ctrl+j ctrl+o</code>: Search notes, display last 20 modified notes by default</li><li><code>ctrl+j ctrl+i</code>: Create attachments</li><li><code>ctrl+j ctrl+m</code>: Manage tags</li><li><code>ctrl+j ctrl+l</code>: Show the attached resources of the current note</li></ul><h2 id="edit-attachments" tabindex="-1">Edit Attachments <a class="header-anchor" href="#edit-attachments" aria-label="Permalink to &quot;Edit Attachments&quot;">​</a></h2><p>Due to frequent issues with the click-to-jump function implemented in the vscode editor, a function to display the current note attachment list was implemented after <code>v0.7.8</code>, used to quickly edit specified attachment resources, default shortcuts is <code>ctrl+j ctrl+l</code>.</p><p><img src="'+o+'" alt="editResource"></p><h2 id="paste-images" tabindex="-1">Paste Images <a class="header-anchor" href="#paste-images" aria-label="Permalink to &quot;Paste Images&quot;">​</a></h2><p>The picture paste function has been added after <code>v0.1.7</code>, it can upload pictures to Joplin and paste the link into VSCode through the right-click menu, command or shortcut key.</p><ol><li><code>ctrl+alt+u</code> Paste image from clipboard</li><li><code>ctrl+alt+e</code> Select and paste image using file manager</li></ol><p><img src="'+c+'" alt="pasteImage"></p><h2 id="add-attachments" tabindex="-1">Add Attachments <a class="header-anchor" href="#add-attachments" aria-label="Permalink to &quot;Add Attachments&quot;">​</a></h2><p>The ability to add attachments has been added after <code>v0.1.10</code>, it can add files as attachment resources to Joplin notes through commands or shortcut keys.</p><ol><li><code>ctrl+alt+shift+e</code> Select the file to be added as an attachment</li></ol><h2 id="create-attachments" tabindex="-1">Create Attachments <a class="header-anchor" href="#create-attachments" aria-label="Permalink to &quot;Create Attachments&quot;">​</a></h2><p>The right-click function to create attachment resources has been implemented after <code>v0.3.0</code>, mainly used to quickly create and add a mind map (supported by Baidu Mindmap) or a flowchart (supported by draw.io).</p><h2 id="tag-management" tabindex="-1">Tag Management <a class="header-anchor" href="#tag-management" aria-label="Permalink to &quot;Tag Management&quot;">​</a></h2><p>Tag management is supported after <code>v0.3.0</code>, the command is <code>&gt; Joplin: Manage tags</code>, the default shortcut is <code>ctrl+j ctrl+m</code> to pop up the checkbox.</p><h2 id="create-tags" tabindex="-1">Create Tags <a class="header-anchor" href="#create-tags" aria-label="Permalink to &quot;Create Tags&quot;">​</a></h2><p>Tag creation is supported after <code>v0.3.0</code>, the command is <code>&gt; Joplin: Create tag</code>.</p><h2 id="link-notes" tabindex="-1">Link Notes <a class="header-anchor" href="#link-notes" aria-label="Permalink to &quot;Link Notes&quot;">​</a></h2><p>You can see <strong>Copy Link</strong> on the right-click menu of the note, click to copy to the clipboard.</p><p><img src="'+r+'" alt="Link notes"></p><p>Use <code>Ctrl+click</code> to open in other notes.</p>',25),s=[l];function n(h,u,p,m,f,g){return a(),e("div",null,s)}const k=t(i,[["render",n]]);export{_ as __pageData,k as default};
