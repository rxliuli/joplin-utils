# Quick Start

## Overview

The joplin-vscode-plugin provides functions for managing joplin notes in vscode, including common tasks such as viewing, editing notes, managing note tags, adding or modifying attachments, internal linking, searching, and more.

Joplin Web Clipper aims to communicate with browser extensions through REST Web API, sharing notes, notebooks, tags, etc. The joplin-vscode-plugin connects to the same REST endpoint, allowing you to view and modify notes without leaving the editor.

> Why this plugin? Read [My Motivation](./faq.md) to understand why it was developed.
>
> What can it do? [Features](./feature.md) lists existing functionalities.
>
> Never heard of [Joplin](https://joplinapp.org/)? You've missed a decent [open-source synced note application](https://joplinapp.org/).

## Requirements

- Joplin version > v2.8
- VSCode version > v1.66.2
- Joplin Web Clipper enabled
- Familiarity with basic use of Joplin and VSCode

## Install Joplin VSCode plugin

Search for joplin in the VSCode marketplace. Find the joplin-vscode-plugin and click on Install.

![Install plugin](/images/install-plugin.png)

## Configuration

To access the Joplin database, we need to connect to the API endpoint opened by Joplin Web Clipper. This means that Joplin must be running, and the Web Clipper must be enabled.

> For help with the Web Clipper, refer to [Joplin Web Clipper](https://joplinapp.org/clipper/).

To get started and running, take note of two settings.

Authorization token

- Copy your authorization token from Joplin settings and paste it here.
  **Web Clipper -> Advanced Option -> Copy Token Token**.

Base path

- Generally, if you are using a locally installed joplin desktop client, no special configuration is required. If using a remote joplin service, you need to configure it.
  For example, <http://localhost:41184>

![Install plugin](/images/joplin-settings.png)

## Restart VSCode

Currently, the configuration will not automatically reconnect after editing, you need to close VSCode, and it will connect to Joplin the next time you start it.

## Getting Started

Enter the shortcut `Ctrl+J Ctrl+J`, and then celebrate :tada:. This shortcut combination activates the `view: show joplin` command, opens the sidebar, and displays all notebooks.

![Preview](https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20200623085740.png)

## Features

All your notes and notebooks can be found in the sidebar, and expanding a notebook reveals its sub-notebooks and notes below.

Click on a note to open a working copy in the editor, and save it to push the changes back to Joplin.

You can freely create, edit and delete **notes** and **notebooks**, all seamlessly within VSCode. 🦸♀️

## Commands and Key Bindings

VSCode has many shortcut key bindings. To avoid conflict with built-in shortcuts, we assume a shortcut prefix `Ctrl+J`, and continue to add two-step shortcut keys afterward.

Tip: Explore the results of entering `joplin` in the command palette, and discover great features that I haven't told you about.
