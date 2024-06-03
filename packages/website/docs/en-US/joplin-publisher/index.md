# Joplin Publisher

## Introduction

Publish Joplin notes to GitHub, and automate the build and deployment process using GitHub Actions.

## Usage

### GitHub

1. If you haven't already, [sign up](https://github.com/signup) for a GitHub account.
2. Use the template project [joplin-blog-template](https://github.com/joplin-utils/joplin-blog-template) to create a new repository named `<github username>.github.io`
   ![create 1](/images/joplin-publisher-github-create-1.png)
   ![create 2](/images/joplin-publisher-github-create-2.png)
   ![create 3](/images/joplin-publisher-github-create-3.png)
3. Navigate to Settings > Pages > Build and deployment, and select GitHub Actions
   ![setting 1](/images/joplin-publisher-github-setting-1.png)
4. [Create](https://github.com/settings/personal-access-tokens/new) a GitHub token, selecting at least the content and `<github username>.github.io` repository permissions. Copy the token after creation.
   ![setting 2](/images/joplin-publisher-github-setting-2.png)

### Joplin

1. Install the plugin
2. Open Joplin > Settings > Plugins > Publisher, and set GitHub token/username/repo
   ![setting 1](/images/joplin-publisher-joplin-setting-1.png)
3. Choose a note and add the tag **blog**
   ![setting 2](/images/joplin-publisher-joplin-setting-2.png)
4. Click Tools > Publish to GitHub to publish
   ![publish 1](/images/joplin-publisher-joplin-publish-1.png)

Wait for a couple of minutes, then you can visit `<github username>.github.io` to see your published notes.

![blog](/images/joplin-publisher-joplin-blog-1.png)

You can continue to add the blog tag to notes you wish to publish, then run **Publish to GitHub** again, which will update the notes on the website.

## Configuration

Since Hexo is used for rendering, you can configure it in the created GitHub repository. The theme currently used is Fluid, and you can modify the corresponding theme settings.

For example, if you want to change the site's title, you can modify `title` in `_config.yml`

![hexo-setting-1](/images/joplin-publisher-hexo-setting-1.png)

To update the background image of the homepage, you can modify `index.banner_img` in `_config.fluid.yml`

![hexo-setting-2](/images/joplin-publisher-hexo-setting-2.png)

References

- Hexo documentation: <https://hexo.io/>
- Fluid theme documentation: <https://hexo.fluid-dev.com/docs/en/guide/>
