module.exports = {
    siteMetadata: {
        title: 'Gatsby Starter Redux Storybook',
        description: 'Everything you need to get started',
        author: 'Fabian Unger',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Gatsby Starter Redux + Storybook',
                short_name: 'Gatsby Starter Redux + Storybook',
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#744C9E',
                display: 'standalone',
                icon: 'src/assets/logos/icon.png',
            },
        }, {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/`,
                name: 'src',
            },
        },
        'gatsby-plugin-root-import',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-offline',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-styled-components',
    ],
};
