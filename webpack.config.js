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
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    devtool: 'inline-source-map'
};
