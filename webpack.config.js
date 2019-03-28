const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

const PATHS = {
    src: path.join(__dirname, 'src'),
};

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    devServer: {
        // needed in order for webpack-dev-server to serve index.html located in dist
        contentBase: './dist',
        stats: 'minimal',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.module\.css$/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName:
                                '[folder]__[local]--[hash:base64:5]',
                        },
                    },
                    'postcss-loader',
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            // filename: isDev ? '[name].css' : '[name].[hash].css',
            // chunkFilename: isDev ? '[id].css' : '[id].[hash].css',
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new PurgecssPlugin({
            paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
        }),
    ],
};
