const VueLoaderPlugin = require ('vue-loader/lib/plugin');
const HtmlPlugin = require ('html-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    devServer: {
        port: 3000,
        // proxy: {
        //     '/api': {
        //         target: 'http://localhost:8080/',
        //         pathRewrite: { '^/api': '' },
        //         secure: false,
        //         changeOrigin: true,
        //     }
        // }
    },
    module: {
        rules: [
            {
                test: /\.vue$/, 
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlPlugin ({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin(),
        // new CopyPlugin({
        //     patterns: [
        //       { from: 'source', to: 'dest' },
        //       { from: 'other', to: 'public' },
        //     ],
        // }),
        // new MiniCssExtractPlugin ({
        //     filename: 'style/[name].css',
        //     chunkFilename: '[id].css',
        // }),
        new VueLoaderPlugin ()
    ]
}