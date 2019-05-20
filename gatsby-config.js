/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  // added siteMetadata so we can query it through graphql
  siteMetadata: {
    title: "Portfolio",
    author: "Jack Dwyer",
  },
  plugins: [`gatsby-plugin-react-helmet`],
}
