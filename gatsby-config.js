module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jenny's Portfolio`,
        short_name: `Jenny Riley - UI/UX Designer and Frontend Developer`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
