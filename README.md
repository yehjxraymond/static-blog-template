# Gatsby Blog

[Demo Site](https://static-blog.netlify.app/)

This repo contains an example blog that is built with Gatsby, and Netlify CMS.

It follows the JAMstack architecture by using Git as a single source of truth, and Netlify for continuous deployment, and CDN distribution.

## Getting Started

Netlify CMS can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify.

Use the link below to build and deploy your own copy of the repository:

[Deploy to Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/yehjxraymond/static-blog-template&stack=cms)

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. Next, you’ll need to set up Netlify’s Identity service to authorize users to log in to the CMS.

## Feature

- Netlify CMS to manage blog
- Contact form
- Lighting fast page load

## Configuration

### Generate site logo

Replace the logo in `static/logo.png` and run `npm run generate-favicon` to generate the other favicon assets from that logo.

### TODO

- active in menu bar
- configurable menu bar
- analytics
- seo
