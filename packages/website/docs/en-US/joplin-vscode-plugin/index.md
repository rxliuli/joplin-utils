# Quick Start

## Overview

> [![install](https://img.shields.io/visual-studio-marketplace/i/rxliuli.joplin-vscode-plugin)](https://marketplace.visualstudio.com/items?itemName=rxliuli.joplin-vscode-plugin&ssr=false#overview)

Joplin VSCode Plugin provides the functionality to manage Joplin notes within VSCode, including common actions like viewing, editing notes, managing note tags, adding or modifying attachments, internal linking, searching, and more.

Joplin Web Clipper aims to communicate with browser extensions via REST Web API, sharing notebooks, notes, tags, etc. Joplin VSCode Plugin connects to the same REST endpoint, allowing you to view and modify notes without leaving the editor.

> Why does this plugin exist? Read [My Motivation](./faq.md) to understand the reasons behind its development.
>
> What can it do? [Features](./feature.md) lists the existing functionalities.

## Requirements

- Joplin version > v2.8
- VSCode version > v1.66.2
- Enable Joplin Web Clipper

## Install Joplin VSCode Plugin

Search for joplin in the VSCode marketplace. Find Joplin VSCode Plugin and click install.

![Install Plugin](/images/install-plugin.png)

## Configuration

To access the Joplin database, we need to connect to the API endpoint opened by Joplin Web Clipper. This means that Joplin must be running and the Web Clipper must be enabled.

> For help on Web Clipper, refer to [Joplin Web Clipper](https://joplinapp.org/clipper/).

To get started, you need to pay attention to two settings.

Authorization Token

- Copy your authorization token from Joplin settings and paste it here.
  **Web Clipper -> Advanced Options -> Copy Token**.

Base URL

- Generally, if you are using the locally installed Joplin Desktop Client, no special configuration is needed. If you are using a remote Joplin service, configuration is required.
  For example, <http://127.0.0.1:41184>

![Config Settings](/images/joplin-settings.png)

## Getting Started

Enter the shortcut `Ctrl+J Ctrl+J`, and then celebrate :tada:. This key combination activates the `view:show joplin` command, opening the sidebar to show all notebooks.

![Preview](https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20200623085740.png)

## Features

All your notes and notebooks can be found in the sidebar, expand a notebook to see the sub-notebooks and notes underneath.

Click on a note to open a working copy in the editor, save it to push the modifications back to Joplin.

You can freely create, edit, and delete **notes** and **notebooks**, all done seamlessly within VSCode. 🦸♀️

## Commands and Shortcuts

VSCode has numerous shortcuts. To avoid conflicts with built-in shortcuts, this plugin assumes a prefix of `Ctrl+J`, followed by a two-step shortcut.

Hint: Explore results by typing `joplin` in the command palette to find out functionalities not listed here.
