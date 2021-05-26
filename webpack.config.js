module.exports = {
  entry: __dirname + '/public/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test : /\.jsx?/,
        loader : 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    ]
  }
}