const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        // Main javascript entry point
        bundle: path.resolve(__dirname, 'src/run-app.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // Name same as 'entry' key
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                // In any js file
                test: /\.js$/,
                // Excluding node_modules
                exclude: /node_modules/,
                // Use the babel loader
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};