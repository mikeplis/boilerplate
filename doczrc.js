const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV !== 'production';

// TODO: dedupe from webpack.config.js
module.exports = {
    src: './src',
    modifyBundlerConfig: config => {
        config.module.rules.push({
            test: /\.module\.css$/,
            use: [
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: 1,
                        localIdentName: '[folder]__[local]--[hash:base64:5]',
                    },
                },
                'postcss-loader',
            ],
        });

        return config;
    },
};
