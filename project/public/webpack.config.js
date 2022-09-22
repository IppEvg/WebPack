const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');


module.exports = {
    entry: './src/main.js',
    output: {
        path: resolve(__dirname, "build"),
        filename: "main.[contenthash].js"
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].js"
        }),
        new HtmlWebpackPlugin(
            { template: resolve(__dirname, 'index.html') }
        )
    ],
    module: {
        riles: [
            {
                test: /\\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'scss-loader']
            }
        ]
    },
    devServer: {
        port: 3000
    }
};