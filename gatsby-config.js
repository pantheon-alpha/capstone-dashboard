module.exports = {
  siteMetadata: {
    title: `Finseed Dashboard`,
    description: `A centralised platform designed exclusively to provide both necessary capital and dividend yield for the farmer and the investor.`,
    author: `@pantheon`,
    siteUrl: `https://finseed.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `@martinreiche/gatsby-firestore`,
      options: {
        credential: require("./serviceAccountKey.json"),
        types: [
          {
            type: "User",
            collection: "users",
            map: doc => ({
              name: doc.name,
              email: doc.email,
              role: doc.role,
              id: doc.id,
            }),
          },
          {
            type: "Farm",
            collection: "farms",
            map: doc => ({
              id: doc.id,
              name: doc.name,
              size: doc.size,
              city: doc.city,
              price: doc.price,
            }),
          },
        ],
      },
    },

    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Finseed`,
        short_name: `FNSD`,
        start_url: `/`,
        background_color: `#66D998`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#66D998`,
        display: `minimal-ui`,
        icon: `src/images/Finseed.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins`,
          `sans serif:100,200,300,400,500,600,700`
        ],
        display: 'swap'
      }
    }
  ],
}
