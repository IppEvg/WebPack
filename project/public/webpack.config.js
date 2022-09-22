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

        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].js"
        }),
        new HtmlWebpackPlugin(

        ),
        new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [
            {
                test: /\\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'scss-loader']
            },
            {
                test: /\\.(png|jpe?g|gif|mp3)$/i,
                use: 'file-loader'
            }
        ]
    },
    devServer: {
        port: 3000
    }
};