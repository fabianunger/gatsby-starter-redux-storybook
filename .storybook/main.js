module.exports = {
    stories: ['../src/__stories__/**/*.stories.(js|mdx)'],
    // registers the installed addons(registration order matters)
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-notes',
    ],

};
