module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jenny's Design Portfolio`,
        short_name: `Jenny's Portfolio'`,
        description: `Jenny Riley - UI/UX Designer and Frontend Developer`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
