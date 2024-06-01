# Joplin Publisher

## Introduction

Publish Joplin notes to GitHub and automate build deployment through GitHub Actions.

## Usage

### GitHub

1. If you haven't already, [register](https://github.com/signup) for a GitHub account.
2. Use the template project [joplin-blog-template](https://github.com/joplin-utils/joplin-blog-template) as a template to create a new repository named `<github username>.github.io`
   ![create 1](/images/joplin-publisher-github-create-1.png)
   ![create 2](/images/joplin-publisher-github-create-2.png)
   ![create 3](/images/joplin-publisher-github-create-3.png)
3. Modify Settings > Pages > Build and deployment, select GitHub Actions
   ![setting 1](/images/joplin-publisher-github-setting-1.png)
4. [Create](https://github.com/settings/personal-access-tokens/new) a GitHub token, at least select content and `<github username>.github.io` repository permissions, copy the token after creation
   ![setting 2](/images/joplin-publisher-github-setting-2.png)

### Joplin

1. Install the plugin
2. Open Joplin > Settings > Plugins > Publisher, and set GitHub token/username/repo respectively
   ![setting 1](/images/joplin-publisher-joplin-setting-1.png)
3. Select a note and add the **blog** tag
   ![setting 2](/images/joplin-publisher-joplin-setting-1.png)
4. Click Tools > Publish to GitHub to publish
   ![publish 1](/images/joplin-publisher-joplin-publish-1.png)

Wait for two minutes, then you can go to `<github username>.github.io` to see your published note.

![blog](/images/joplin-publisher-joplin-blog-1.png)

You can continue to add the blog tag to notes you want to publish and rerun **Publish to GitHub** to update the notes on the website.
