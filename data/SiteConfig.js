module.exports = {
  siteTitle: "Civic Hackathons", // Site title.
  siteTitleShort: "Civic Hacks", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Civic Hackathon Guide and Resources", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://civichackathons.com/", // Domain of your website without pathPrefix.
  //pathPrefix: "/gatsby-material-starter", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "A Civic Hackathon Guide and Resources.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  //siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  siteGATrackingID: "UA-126467703-1", // Tracking code ID for google analytics.
  //disqusShortname: "https-vagr9k-github-io-gatsby-material-starter", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Jonathan Porter", // Username to display in the author segment.
  userTwitter: "@civichackathons", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Boston, MA", // User location to display in the author segment.
  userAvatar: "https://avatars1.githubusercontent.com/u/16173036?s=460&v=4", // User avatar to display in the author segment.
  userDescription:
    "Description.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/JPHaus/civichackathons",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/civichackathons",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:info@civichackathons.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Civic Hackathons" // Copyright string for the footer of the website and RSS feed.
};
