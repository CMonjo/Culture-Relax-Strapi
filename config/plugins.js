module.exports = ({ }) => ({
    'wysiwyg': {
        enabled: true,
        resolve: './src/plugins/wysiwyg'
    },
    'users-permissions': {
        config: {
            jwt: {
                expiresIn: '30d',
            },
        },
    },
    'upload': {
        config: {
            providerOptions: {
                localServer: {
                    maxage: 300000
                },
            },
        },
    },
});