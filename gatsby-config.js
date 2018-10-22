module.exports = {
  pathPrefix: `/wikipeda`,
  siteMetadata:{
    title:`Wikipeda`
  },
  plugins:[ 
    {
      resolve:`gatsby-plugin-typography`,
      options:{
        pathToConfigModule:`src/utils/typography.js`
      }
    }

  ],
}
