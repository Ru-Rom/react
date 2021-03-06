const path = require('path');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'main.js'
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.jsx?$/, // Просматривай все модули .js
                exclude: /node_modules/,
                loader: 'babel-loader' // Используй эту сигу
            }
        ]
    }
};