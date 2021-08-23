/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  /* Your site config here */
  siteMetadata :{
     title : "Simply Receipes",
     description : "Nice and clean receipes ",
     author : 'waqasrasheed',
     person : {name : 'waqas' , age : 12},
     simpleData : ['item 1','item 2'],
     complexData : [{name : 'ali' , age : 18},{name : 'raza' , age : 12}]
  },
  plugins: [`gatsby-plugin-styled-components`, 
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets/images/`,
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `5mvuhn2db4q2`,
      accessToken: process.env.CONTENTFUL_API_KEY,
    },
  },
  `gatsby-plugin-react-helmet`
],
 
}
