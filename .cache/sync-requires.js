// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": preferDefault(require("/home/jon/Source/civichackathons/node_modules/gatsby-plugin-offline/app-shell.js")),
  "component---src-templates-post-jsx": preferDefault(require("/home/jon/Source/civichackathons/src/templates/post.jsx")),
  "component---src-templates-tag-jsx": preferDefault(require("/home/jon/Source/civichackathons/src/templates/tag.jsx")),
  "component---src-templates-category-jsx": preferDefault(require("/home/jon/Source/civichackathons/src/templates/category.jsx")),
  "component---src-pages-about-jsx": preferDefault(require("/home/jon/Source/civichackathons/src/pages/about.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/home/jon/Source/civichackathons/src/pages/index.jsx"))
}

