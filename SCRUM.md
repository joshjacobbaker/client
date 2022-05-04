# React Server Side Rendered

[Youtube Tutorial]("https://www.youtube.com/watch?v=JsX_iCZPyOM")

### Backlog
- Background image of Stylists
- Replace all non Nav HTML Element for Navigation sections
- [Framer Motion Hooks & MicroInteractions]("https://www.youtube.com/watch?v=WQv5sDRJaqY")
- [AnimateSharedLayout layoutId Framer Motion Matt Perry]("https://www.youtube.com/watch?v=L_pmBi3m5X0")
- [useInView, useAnimation, useEffect]("https://www.youtube.com/watch?v=hkhskSrT5SY")
- [UseRef Scroll to window]("https://www.youtube.com/watch?v=oszUqCqTGHo")
- [Framer Motion Slider Animation]("https://youtu.be/W0bEL93tt4k")
- AnimatePresence around application for page transitions--exitbeforeenter, initial={false}
- Resize Observer
- Lazy load intersection observer API
- on scroll animation IntersectionObserver API... Root Option parameter for scrolling component
- Cool grid abstract section to showcase graphics, etc.
- Iterate over data to display multiple components within a section
- <a href="#blog">Blog</a> To smooth scroll to sections
- React Icons
- React Router Transitions
- React-Spring
- Grid Layout
- [Tailwind-CSS integration]("https://tailwindcss.com/docs/using-with-preprocessors")
- Autoprefixer
- VH & VW for screen proportionality
- Typing CSS feature... React Component, Styling, Media Queries for small, medium, large screens
- Typing animation on multiple lines
- Stylists Carousel... Need to integrate it into react, Clickable, selectable, and media queried
- Photo Shoot Slider... Add images, update dimensions in media queries
- Admin Page
- Trigger a Function when Scrolling to an Element in React with Intersection Observer
- Media Queries landscape, portrait
- figma
- Swap Fontawesome with more performant SVG replacement from iconify.design
- react context
- jsconfig.json for relative routes
- Hamburger Menu Animation
- react-spring animations
- Global Next.js Header Component
- ID selector smooth scroll animation
- Id % 2 ? row : row-reverse
- [Scroll to the top of page react button]("https://www.youtube.com/watch?v=Xz2Z8xKH-R0")
- Google analytics in website
- Switch the Github SocialMediaIcon symbol for a Phone <i> symbol
- CSS pointer over clickable Modal's, buttons, etc.
- const inputRef = useRef() inputRef.current.focus()
- Toggle Theme animation
- Animations from page to page transition
- Restructure Project folders: pages -> Chapters and Pages
- Add more menu modal items in the list
- Work on Media Queries--different screensizes

### WIP

- [framer motion animations]("https://www.youtube.com/watch?v=iiKOAseIxTw&list=PL4cUxeGkcC9iHDnQfTHEVVceOEBsOf07i&index=18")
- [ThemeProvider & Themehook]("https://www.udemy.com/course/react-and-serverless/learn/lecture/20073518#overview")

- [React-Redux]("https://redux.js.org/tutorials/essentials/part-6-performance-normalization")

### Finished

- [Modal styled components]("https://www.youtube.com/watch?v=d3aI1Dt0Z50")
- Control Page state from Page Component via modals, menus, etc.
- Add a staging branch and/or production branch before... Dev branch
- Remove ReactDOM and use createRoot
- Linear-gradient Background
- Scope all scss files to component with [name].module.scss
- styled-components
- Redux [Quick Start Link]("https://react-redux.js.org/tutorials/quick-start")
- Router [Quick Start Link]("https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md")
- Express Server
- [SCSS]("https://www.udemy.com/course/advanced-css-and-sass/learn/lecture/8274494#overview")
- JSS; CSS in JavaScript
- Componentize sidebar animation
- [backendExpressServer]("Setup API Endpoint")
- [Redux - Thunk regenerator error]("https://techstrology.com/react-async-await-regeneratorruntime-is-not-defined-babel-6/")
- [gh-pages]("https://dev.to/dyarleniber/setting-up-a-ci-cd-workflow-on-github-actions-for-a-react-app-with-github-pages-and-codecov-4hnp")
- - HMR for scss [see link]("https://stackoverflow.com/questions/52043727/webpack-live-hot-reload-for-sass")
  - Problem: scss styles aren't being HMR, solution: styles-loader in dev (see link above) or perhaps a <link type="text/css" rel="stylesheet"> update in minicssextractplugin...?
- Swashbuckling Youtube video Webpack Setup [Youtube Link]("https://www.youtube.com/watch?v=TOb1c39m64A")

## Github

New:

- We have a .github hook that runs a build script
- Does it build Netlify?
  <!-- - We run "npm run gitpushmaster" and our github-actions-workflow-build-pipeline-webhook deploys our app to gh-pages and Netlify builds too. -->
    <!-- "gitpushmaster": "git push -u origin master" -->
    <!-- .github/workflows/node.js.yml -->
  Old:
    <!-- - git checkout gh-pages
    - git subtree push --prefix dist origin gh-pages
    - npm run deploy -->

### Github Pages

- https://joshjacobbaker.github.io/client/

### Netlify

- https://bucolic-dragon-4f576d.netlify.app/
