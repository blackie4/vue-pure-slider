const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
  	index: './src/index.js'
  },
  output: {
    filename: '[name].js',
    libraryTarget: "umd",
    path: path.resolve(__dirname, 'dist')
  },
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