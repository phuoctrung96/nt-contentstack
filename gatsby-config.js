require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const siteUrl = process.env.SITE_URL || "http://localhost:9000"

module.exports = {
  siteMetadata: {
    title: `Visit the Northern Territory, Australia`,
    description: `Official visitor information. Fly direct to Darwin, Alice Springs and Uluru from most capital cities. Discover Kakadu, Kings Canyon, Aboriginal art & more.`,
    author: `Tourism NT`,
    siteUrl: siteUrl,
  },
  trailingSlash: `always`,
  plugins: [
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: `${process.env.GOOGLE_TAG_MANAGER}`,
    //     //includeInDevelopment: false,
    //     // Name of the event that is triggered on every Gatsby route change.
    //     // Defaults to gatsby-route-change
    //     //routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/tourism-nt-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-contentstack`,
      options: {
        api_key: process.env.CS_API_KEY,
        delivery_token: process.env.CS_DELIVERY_TOKEN,
        environment: process.env.CS_ENV,
        expediteBuild: process.env.NODE_ENV === "production",
        enableSchemaGeneration: true,
        locales: [`${process.env.GATSBY_SITE_LOCALE || "en-au"}`],
      },
    },

    // Site plugins
    `gatsby-plugin-sass`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    `gatsby-plugin-layout`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },

    // Site build plugins
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: siteUrl,
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", disallow: "/" }],
          },
        },
      },
    },
    // {
    //   resolve: "gatsby-plugin-sitemap",
    //   options: {
    //     excludes: [],
    //     query: `
    //       {
    //           allSitePage {
    //               nodes {
    //                   path
    //                   pageContext
    //               }
    //           }
    //       }
    //     `,
    //     resolveSiteUrl: () => siteUrl,
    //     serialize: ({ path, pageContext }) => {
    //       return {
    //         url: path,
    //         lastmod: pageContext.updatedAt,
    //       }
    //     },
    //   },
    // },
  ],
}
