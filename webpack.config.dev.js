const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        estilo: './src/js/index0.js',
        bundle: './src/js/index.js'
    },
    output: {
        filename: 'js/[name].js'
    },
    devtool:"source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader:"babel-loader",
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    }, {
                        loader: 'css-loader'
                    }, {
                        loader: 'postcss-loader'
                    }, {
                        loader: 'sass-loader'
                    }
                ]
            }, {
                test: /\.(woff|woff2)$/,
                use: ['url-loader?limit=100000']
            }, {
                test: /\.(svg|gif|jpe?g|png)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'imgs/',
                    name: '[name].[ext]',
                    useRelativePath: true
                }
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({filename: 'index.html', template: './src/index.html'}),
        new MiniCssExtractPlugin({filename: 'css/[name].css'}),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer()]
            }
        })
    ]
}