const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: __dirname
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    }
};