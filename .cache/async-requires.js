// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": () => import("/home/jon/Source/civichackathons/node_modules/gatsby-plugin-offline/app-shell.js" /* webpackChunkName: "component---node-modules-gatsby-plugin-offline-app-shell-js" */),
  "component---src-templates-post-jsx": () => import("/home/jon/Source/civichackathons/src/templates/post.jsx" /* webpackChunkName: "component---src-templates-post-jsx" */),
  "component---src-templates-tag-jsx": () => import("/home/jon/Source/civichackathons/src/templates/tag.jsx" /* webpackChunkName: "component---src-templates-tag-jsx" */),
  "component---src-templates-category-jsx": () => import("/home/jon/Source/civichackathons/src/templates/category.jsx" /* webpackChunkName: "component---src-templates-category-jsx" */),
  "component---src-pages-about-jsx": () => import("/home/jon/Source/civichackathons/src/pages/about.jsx" /* webpackChunkName: "component---src-pages-about-jsx" */),
  "component---src-pages-index-jsx": () => import("/home/jon/Source/civichackathons/src/pages/index.jsx" /* webpackChunkName: "component---src-pages-index-jsx" */)
}

exports.data = () => import("/home/jon/Source/civichackathons/.cache/data.json")

