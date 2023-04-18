module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
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
      resolve: 'gatsby-firesource',
      options: {
        credential: require("./serviceAccountKey.json"),
        types: [
          {
            type: 'User',
            collection: 'users',
            map: doc => ({
              name: doc.name,
              email: doc.email,
              role: doc.role,
              id: doc.id
            })
          },
          {
            type: "Test",
            collection: "test",
            map: doc => ({
              name: doc.name,
              id: doc.id,
              number: doc.number,
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
          {
            type: "Investment",
            collection: "investments",
            map: doc => ({
              id: doc.id,
              name: doc.name,
              type: doc.type,
              amount: doc.amount,
              state: doc.state,
            }),
          },
        ]
      }

    },

    // {
    //   resolve: `@martinreiche/gatsby-firestore`,
    //   options: {
    //     credential: require("./serviceAccountKey.json"),
    //     types: [
    //       {
    //         type: "User",
    //         collection: "users",
    //         map: doc => ({
    //           name: doc.name,
    //           email: doc.email,
    //           role: doc.role,
    //           id: doc.id,
    //         }),
    //       },
    //       {
    //         type: "Test",
    //         collection: "test",
    //         map: doc => ({
    //           name: doc.name,
    //           id: doc.id,
    //           number: doc.number,
    //         }),
    //       },
    //       {
    //         type: "Farm",
    //         collection: "farms",
    //         map: doc => ({
    //           id: doc.id,
    //           name: doc.name,
    //           size: doc.size,
    //           city: doc.city,
    //           price: doc.price,
    //         }),
    //       },
    //       {
    //         type: "Investment",
    //         collection: "investments",
    //         map: doc => ({
    //           id: doc.id,
    //           name: doc.name,
    //           type: doc.type,
    //           amount: doc.amount,
    //           state: doc.state,
    //         }),
    //       },
    //     ],
    //   },
    // },



    
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
