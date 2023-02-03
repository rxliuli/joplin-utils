# joplin-vscode-plugin

> [![install](https://img.shields.io/visual-studio-marketplace/i/rxliuli.joplin-vscode-plugin) VSCode Plugin Marketplace](https://marketplace.visualstudio.com/items?itemName=rxliuli.joplin-vscode-plugin), [Website](https://joplin-utils.rxliuli.com/joplin-vscode-plugin/)

## Overview

`joplin-vscode-plugin` offers editing and management of Joplin notes with the power and flexibility of VSCode.

Joplin Web Clipper is designed to communicate with browser extensions by sharing Notes, Notebooks, Tags, etc. through a REST web API. `joplin-vscode-plugin` connects to that same REST endpoint to freely make changes to your notes without ever leaving the editor.

> Why does this plugin exist? Read [my motivation](https://joplin-utils.rxliuli.com/joplin-vscode-plugin/other/) for developing it.
>
> What can it do? The [roadmap](https://joplin-utils.rxliuli.com/joplin-vscode-plugin/other/roadmap.html) lists both existing and planned features.
>
> Never heard of [Joplin](https://joplinapp.org/)? You're missing out on a great [opensource synchronized note taking app](https://joplinapp.org/).

## Requirements

- Joplin version > v2.8
- VSCode version > v1.66.2
- Joplin Web Clipper enabled
- Basic familiarity with using both Joplin and VS Code

## Install Joplin VSCode plugin

Search for "Joplin" in the VSCode Marketplace. Find "joplin-vscode-plugin" and click Install.

![install plugin](https://github.com/rxliuli/joplin-vscode-plugin/blob/master/docs/_media/install-plugin.png?raw=true)

## Configure

To access the Joplin database, we need a connection to the API endpoint opened by Joplin Web Clipper. That means Joplin must be running and Web Clipper must be enabled.

> For help with Web Clipper refer to: [Joplin Web Clipper](https://joplinapp.org/clipper/).

Two settings need attention to get up and running.

`Token`

- Copy your Authorization token from Joplin settings and paste it here:  
  **Web Clipper -> Advanced options -> Authorization Token**

`baseUrl`

- In general, if you use the locally installed joplin desktop client, no special configuration is required. If you use a remote joplin service, you need to configure it.
  For example <https://1.1.1.1:41184>

![settings plugin](https://github.com/rxliuli/joplin-vscode-plugin/blob/master/docs/_media/joplin-settings.png?raw=true)

## Restart VSCode

Currently configuration edits do not trigger a fresh connection. Simply close VSCode and it should connect to Joplin the next time you start.

---

## Say Hello Joplin

Type the key chord <kbd>Ctrl</kbd>+<kbd>J</kbd> <kbd>Ctrl</kbd>+<kbd>J</kbd> and celebrate. :tada: That hotkey combo activates the _View: Show Joplin_ command, opening the Sidebar to reveal all your Notebooks.

![preview](https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20200623085740.png)

## Usage

All your Notes and Noteboks can be found in the Sidebar. Unfold the Notebooks to see Subnotebooks and Notes beneath.

_Click on a Note to open a working copy in the Editor. Save it to push changes back to Joplin._

You have full access to create, edit, and delete both Notes and Notebooks, at your whim. And it doesn't even stop there. The power is yours now. 🦸‍♀️

> Tip: Explore the results of typing "joplin" in the Command Palette to find out what great features I didn't tell you about.

## Commands and keybindings

VSCode has _a lot_ of keybindings. To avoid constantly clashing with all the built in settings, we laid claim to just one desirable hotekey, <kbd>Ctrl</kbd>+<kbd>J</kbd>, and turned that into the trigger for a key chord.

> Claiming <kbd>Ctrl</kbd>+<kbd>J</kbd> displaced the native binding for `workbench.action.togglePanel` (_View: Toggle Panel_). For your convenience a sane replacement binding is already added at <kbd>Ctrl</kbd>+<kbd>K</kbd> <kbd>Ctrl</kbd>+<kbd>J</kbd>.

Type `Joplin` into the Command Palette (<kbd>Ctrl</kbd>+<kbd>P</kbd>) to see all the new commands available to you. Some of them already have keybindings. Assign new bindings under the <kbd>Ctrl</kbd>+<kbd>J</kbd> namespace to fit your needs.
