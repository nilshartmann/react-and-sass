const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/public/dist/',
        filename: 'main.js',
        publicPath: '/dist'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css")
    ],
    devtool: 'inline-source-map'
};
