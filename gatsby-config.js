const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: `DRC`,
    description: `Gatsby React Starter for Internal Development Purposes.`,
    author: `@noisytrumpet`,
    siteUrl: `https://watertheconsequences.com`,
  },
  // menuLinks: [
  //   {
  //     name: "Top",
  //     link: "#top",
  //     type: `anchor`,
  //   },
  //   {
  //     name: "Background",
  //     link: "/background",
  //     type: `anchor`,
  //   },
  //   {
  //     name: "Regional Impact",
  //     link: "/regional-impact",
  //     type: `anchor`,
  //   },
  //   {
  //     name: "International Impact",
  //     link: "/international-impact",
  //     type: `anchor`,
  //   },
  //   {
  //     name: "Ecological Impact",
  //     link: "/ecological-impact",
  //     type: `anchor`,
  //   },
  //   {
  //     name: "What Can Be Done?",
  //     link: "/what-can-be-done",
  //     type: `anchor`,
  //   },
  // ],
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /SVG/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
