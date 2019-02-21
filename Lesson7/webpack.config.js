const path = require('path');
//var debug = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: path.resolve(__dirname, 'src', 'app.jsx'),//'./src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    }, 
    mode: 'development',
    //devtool: debug ? 'inline-sourcemap' : null,
    watch: true,
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Просматривай все модули .js
                exclude: /node_modules/,
                loader: 'babel-loader' // Используй эту сигу
            },
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'], // Работает справа на лево
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3001
    }
};