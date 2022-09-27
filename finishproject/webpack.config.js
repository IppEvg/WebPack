
const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports ={
    entry:     resolve(__dirname, 'src','index.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: "main.[contenthash].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:resolve(__dirname,'src','index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "img-optimize-loader"
                    }
                ]
            },
            {
                test:/\.(mp[3|4])$/i,
                use:[
                    {
                    loader:"file-loader"
                    }
                ]
            }     
        ]
    }
}