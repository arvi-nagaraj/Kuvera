const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ ,
        query: {
            presets: ['react', 'es2015']
        }     
     },
     { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/,
       query: {
        presets: ['react', 'es2015']
       } 
     }
    ]
  }
}