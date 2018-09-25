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
        libraryTarget: 'commonjs2' //sets the "module.exports" property in the output file to your React component which is required for it to be used as an npm package
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
