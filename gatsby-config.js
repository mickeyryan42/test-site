module.exports = {
  siteMetadata: {
    title: `test-site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    },
    
  },{
    resolve: 'gatsby-plugin-gatsby-cloud',
    options: {
      headers: {
        '/*': ['Referrer-Policy: no-referrer-when-downgrade', 'cache-control: no-cache', 'X-Test-Header: test'],
      },
    },
  },]
};
