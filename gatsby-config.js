module.exports = {
  siteMetadata: {
    title: `Exim AirCare`,
    description: `A Basic Gatsby App For Learning Purpose`,
    author: `Neil Kapadia`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        forceFullSync: true
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve:`gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#3d5af1`,
        theme_color: `#3d5af1`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Exim Air Care`,
        short_name: `Exim Air Care`,
        start_url: `/`,
        background_color: `#3d5af1`,
        theme_color: `#3d5af1`,
        display: `standalone`,
      },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`,`/about/`, `/blog/`, `/contact/`, `/404`],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
