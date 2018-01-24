module.exports = {
    entry: "./js/app.js",
    output: {
        filename: "./js/out.js"
    },
    watch: true,
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']

            }
        },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader'
                ]
            }]
    }
};

