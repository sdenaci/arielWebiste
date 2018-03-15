module.exports = {
  siteMetadata: {
    title: `Ariel Leutheusser`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `lora`,
          `source sans pro\:300,400,400i,700`,// you can also specify font weights and styles
          `raleway`
        ]
      }
    }
  ]
}
