# Quick Start

## Overview

Joplin VSCode Plugin provides the capability to manage Joplin notes within VSCode, including common tasks such as viewing, editing notes, managing note tags, adding or editing attachments, internal linking, searching, etc.

Joplin Web Clipper aims to communicate with browser extensions via REST Web API, sharing notes, notebooks, tags, and so on. The Joplin VSCode Plugin connects to the same REST endpoint, allowing you to view and edit notes without leaving the editor.

> Why does this plugin exist? Read [my motivation](./faq.md) to understand the reasons behind its development.
>
> What can it do? The [features](./feature.md) list the existing functionality.
>
> Never heard about [Joplin](https://joplinapp.org/)? You've missed a decent [Open Source Sync Note App](https://joplinapp.org/).

## Requirements

- Joplin version > v2.8
- VSCode version > v1.66.2
- Enable Joplin Web Clipper
- Familiar with the basic usage of Joplin and VSCode

## Install Joplin VSCode Plugin

Search for joplin in the VSCode marketplace. Find Joplin VSCode Plugin and click install.

![Install the plugin](/images/install-plugin.png)

## Configuration

To access Joplin's database, we need to connect to the API endpoint opened by Joplin Web Clipper. This means that Joplin must be running, and the Web Clipper must be enabled.

> For help with the Web Clipper, please refer to [Joplin Web Clipper](https://joplinapp.org/clipper/).

Two settings need to be noted to start and run.

Authorization Token

- From Joplin settings, copy your authorization token and paste it here.
  **Web Clipper -> Advanced Options -> Copy Token**.

Base Path

- Generally speaking, if you are using locally installed Joplin desktop client, you don't need special configuration. If using a remote Joplin service, configuration is needed.
  For example <http://localhost:41184>

![Plugin installation](/images/joplin-settings.png)

## Restart VSCode

Currently, it doesn't automatically reconnect after configuration edit, so you need to close VSCode, and it will connect to Joplin the next time you start.

## Start Using It

Press shortcut `Ctrl+J Ctrl+J`, then celebrate :tada:. This shortcut combo triggers the `view: show joplin` command, opening the sidebar and displaying all notebooks.

![Preview](https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20200623085740.png)

## Features

All your notes and notebooks can be found in the sidebar, expanding a notebook allows you to see the sub-notebooks and notes underneath.

Click a note, a working copy opens in the editor, save it to push modifications back to Joplin.

You can freely create, edit, and delete **notes** and **notebooks**, all seamlessly within VSCode. 🦸♀️

## Commands and Key Bindings

VSCode has many shortcut key bindings, to avoid conflict with built-in shortcuts, we assume a shortcut prefix `Ctrl+J`, followed by a secondary shortcut.

Tip: Explore the great features that I haven't told you by inputting `joplin` in the command palette.
