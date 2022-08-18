module.exports = {
  pathPrefix: "/assignment1a_task2",
  siteMetadata: {
    title: `Welcome`,
    description: `A simple bootstrap 5 and Sass starter for Gatsby. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@r-ichard`,
  },
  plugins: [
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
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-bootstrap-5`,
        short_name: `gb5-starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "@directus/gatsby-source-directus",
      options: {
          url: `https://w8oi3vrm.directus.app/`, // Fill with your Directus instance address
          auth: {
              token: "Mkj9EBcCpM9kD9P0HDS4gDf6c4_llgvl", // You can use a static token from an user

              // Or you can use the credentials of an user
          },
      },
  },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
