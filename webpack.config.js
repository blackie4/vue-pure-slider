const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
  	index: './src/index.js',
  	example: './example/index.js',
  },
  output: {
    filename: '[name].js',
    libraryTarget: "umd",
    path: path.resolve(__dirname, 'dist')
  },
   plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './example/index.html',
      chunks: ['example'],
      hash: true
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.less']
  },
  module: {
  	rules: [
	  	{
	  		test: /\.vue$/,
	  		loader: 'vue-loader'
	  	},
	  	{
	  		test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
	  	}
  	]
  }
}