const EslintWebpackPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./src/index.js",
    devServer: {
     static: "./dist",
     open: false,
     hot: true,
   },
    output: {
        filename: "super.js"
    },
    module: {
        rules: [{ test: /\.css$/,
            use: [{loader: MiniCssExtractPlugin.loader,options: {esModule: true,},},'css-loader',],}],
    },
    plugins:[
    new MiniCssExtractPlugin(),
    new EslintWebpackPlugin(
            {
                extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx',]
            }
        )
    ]
    }