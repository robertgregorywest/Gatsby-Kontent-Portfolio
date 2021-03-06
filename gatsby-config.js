const siteConfig = require('./site-config');

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-webpack-size`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/.*\.svg$/,
        },
      },
    },
    {
      resolve: '@kentico/gatsby-source-kontent',
      options: {
        projectId: '11e6cfb8-493c-007b-5e62-fd039a778575',
        languageCodenames: ['default'],
      },
    },
    {
      resolve: `@rshackleton/gatsby-transformer-kontent-image`,
      options: {
        remote: true,
      },
    },
  ],
};
