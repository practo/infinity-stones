var path = require('path');
 
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    resolve: {
      extensions: [".js", ".jsx"]
    },
    output: {
        path: path.resolve('build'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
};
