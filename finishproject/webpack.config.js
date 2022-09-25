
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports ={
    entry:{
        main: path.resolve(__dirname, './src/index.js')
    },
    output: {
        main: path.resolve(__dirname, 'dist'),
        filename: "bungle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:resolve(__dirname,'src','index.html')
        }
        )
    ],
    module: {
        rules: [
            
            {
                test: /\\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader','scss-loader']
            },
            {
                test: /\\.(png|jpe?g|gif|mp3)$/i,
                use: [
                    {
                      loader:  'file-loader'
                    }
                ]
            }
        ]
    }
}