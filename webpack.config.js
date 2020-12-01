const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/shop.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'shop.js'

    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js'
        }

    },
    module: {
        rules:[
            {
                test: /\.vue$/,
                use: [
                    {loader: 'vue-loader'},
                ]
            },
            {
                test: /\.js$/,
                use: [
                    { loader: 'babel-loader'},
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: { 
                        modules: true,
                        }
                    },
                ],
            },
        ]
    },
    plugins: [ 
        new VueLoaderPlugin()
    ]
}