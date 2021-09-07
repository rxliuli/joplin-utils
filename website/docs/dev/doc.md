# Documentation

> [Required Dependencies](./require.md)

## Setting up the local environment

To start you need to fork the project on GitHub, see: [Fork a repo](https://docs.github.com/en/github/getting-started-with-github/quickstart/fork-a-repo)

```sh
# Clone the repo locally
git clone https://github.com/<YOUR GITHUB NAME>/joplin-utils.git
# Navigate to documentation folder
cd website/
# Install required dependencies
yarn
# Start the local development environment
yarn docs:dev
```

You should be able to see a preview of the local documentation at <http://localhost:8080/>

## Adding document translations

1. Check the existing [documentation optimization](https://github.com/rxliuli/joplin-utils/issues/9 ) list. Select a task and reply to the specific line in the issue
2. As we are using [vuepress2](https://v2.vuepress.vuejs.org/) you need to understand the basic configuration i.e. how to modify the navigation bar and sidebar as well as how to add new documents
3. Add new documents to _docs/_ then modify _docs/.vuepress/config.js_ to add them to the website

You will notice that the configuration for the navigation bar is basically a nested array, the sidebar configuration is set via a link within the navigation bar.
For example, this is an existing configuration for the joplin-vscode-plugin documentation

```json
{
  "navbar": [
    {
      "text": "joplin-vscode-plugin",
      "link": "joplin-vscode-plugin/"
    }
  ]
}
```

We can then configure `"/joplin-vscode-plugin/"` in the corresponding sidebar list

```json
{
  "sidebar": {
    "/zh/joplin-vscode-plugin/": [
      {
        "text": "Guide",
        "children": [
          "/joplin-vscode-plugin/",
          "/joplin-vscode-plugin/guide/faq",
          "/joplin-vscode-plugin/guide/feature",
          "/joplin-vscode-plugin/guide/recommended-extension",
          "/joplin-vscode-plugin/guide/limitations"
        ]
      }
    ]
  }
}
```
