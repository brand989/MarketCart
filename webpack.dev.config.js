const { merge } = require('webpack-merge')
const base = require('./webpack.config.js')

module.exports = merge(base, {
    output: {
        publicPath: '/js'
    },
    devServer:{
        publicPath: '/js',
        contentBase: './public',
        port: 3000,
        host: 'localhost',
        hot: true,

    }

})