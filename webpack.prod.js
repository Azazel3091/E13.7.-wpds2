const path = require('path');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
    devtool: "inline-source-map",
    entry: {
        index: {
            import: './src/index.js',
            dependOn: 'shared',
        },
        another: {
            import: './src/another-module.js',
            dependOn: 'shared',
        },
        shared: 'lodash.merge',
    },
    output: {filename: '[name].main.js',
            path: path.resolve(__dirname, 'dist')
        },
    stats: {
        children: false,
        modules: false
    },
    devServer: {
     static: "./dist",
     open: true,
     port: 3001
   },
   module: {
        rules: [{ test: /\.css$/,
            use: [{loader: MiniCssExtractPlugin.loader,options: {esModule: true,},},'css-loader',],}],
    },
    plugins:[
    new MiniCssExtractPlugin(),
    new EslintWebpackPlugin(
            {
                extensions: ['js', 'mjs', 'jsx', 'ts', 'tsx']
            }
        )
    ]
    }