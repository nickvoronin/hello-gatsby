module.exports = {
  siteMetadata: {
    title: 'Orange Blog',
    description: 'This is my blog',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-remark',
    // 'gatsby-transformer-sharp',
    // 'gatsby-plugin-sharp',
    {
      // resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'pages',
        path: `${__dirname/src/pages}`
      },
    },
  ],
}
