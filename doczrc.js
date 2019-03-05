module.exports = {
    src: './src',
    title: 'Docs',
    modifyBundlerConfig: config => {
        config.resolve.extensions.push('.scss');
        config.module.rules.push({
            // TODO: dedupe this from webpack config
            test: /\.module\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[folder]__[local]--[hash:base64:5]',
                    },
                },
            ],
        });

        return config;
    },
};
