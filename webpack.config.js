const VueLoaderPlugin = require ('vue-loader/lib/plugin')
const HtmlPlugin = require ('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

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
                // test: /\.css$/,
                // //loader: 'css-loader' без миницссплагина
                // use: [
                //     //preProcessor-loader
                //     {
                //         loader: MiniCssPlugin.loader,
                //         options: {
                //             publicPath: '../',
                //             hmr: process.env.NODE_ENV === 'development'
                //         }
                //     },
                //     'css-loader'
                // ]
            }
        ]
    },
    plugins: [
        new HtmlPlugin ({
            template: './src/public/index.html'
        }),
        // new CopyPlugin({
        //     patterns: [
        //       { from: 'source', to: 'dest' },
        //       { from: 'other', to: 'public' },
        //     ],
        // }),
        // new MiniCssPlugin ({
        //     filename: 'style/[name].css',
        //     chunkFilename: '[id].css',
        // }),
        new VueLoaderPlugin ()
    ]
}