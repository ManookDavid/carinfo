const path = require('path')

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.(png|jpe?g|gif)$/i,use: [{loader: 'file-loader'}]},
            { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader', "postcss-loader"]}
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 4000
      }
}