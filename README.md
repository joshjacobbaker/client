# React Server Side Rendered

[Youtube Tutorial]("https://www.youtube.com/watch?v=JsX_iCZPyOM")

### Backlog

- Redux [Quick Start Link]("https://react-redux.js.org/tutorials/quick-start")
- Router [Quick Start Link]("https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md")
- Express Server

- React Router Transitions
- React-Spring
- Grid Layout
- [Tailwind-CSS integration]("https://tailwindcss.com/docs/using-with-preprocessors")
- Autoprefixer
- Remove ReactDOM and use createRoot
- JSS; CSS in JavaScript
- VH & VW for screen proportionality
- Typing CSS feature... React Component, Styling, Media Queries for small, medium, large screens
- Stylists Carousel... Need to integrate it into react, Clickable, selectable, and media queried

- Photo Shoot Slider... Add images, update dimensions in media queries
- Admin Page
- figma
- Swap Fontawesome with more performant SVG replacement from iconify.design

### WIP

- Scope all scss files to component with [name].module.scss

- [React-Redux]("https://redux.js.org/tutorials/essentials/part-6-performance-normalization")

- [SCSS]("https://www.udemy.com/course/advanced-css-and-sass/learn/lecture/8274494#overview")

### Finished

- Componentize sidebar animation
- [backendExpressServer]("Setup API Endpoint")
- [Redux - Thunk regenerator error]("https://techstrology.com/react-async-await-regeneratorruntime-is-not-defined-babel-6/")
- [gh-pages]("https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp")
- - HMR for scss [see link]("https://stackoverflow.com/questions/52043727/webpack-live-hot-reload-for-sass")
  - Problem: scss styles aren't being HMR, solution: styles-loader in dev (see link above) or perhaps a <link type="text/css" rel="stylesheet"> update in minicssextractplugin...?

- Swashbuckling Youtube video Webpack Setup [Youtube Link]("https://www.youtube.com/watch?v=TOb1c39m64A")

## Github

New:

- We run "npm run gitpushmaster" and our github-actions-workflow-build-pipeline-webhook deploys our app to gh-pages and Netlify builds too.
  <!-- "gitpushmaster": "git push -u origin master" -->
  <!-- .github/workflows/node.js.yml -->
  Old:
  <!-- - git checkout gh-pages
  - git subtree push --prefix dist origin gh-pages
  - npm run deploy -->

### Github Pages

- https://joshjacobbaker.github.io/reactServerRendering/

### Netlify

- https://bucolic-dragon-4f576d.netlify.app/
