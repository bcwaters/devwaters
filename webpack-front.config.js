const webpack = require('webpack');
module.exports = {
  entry: './src/client/index.js',
   module: {
    rules: [
	 {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
	   { 
      test: /\.svg$/, 
      loader: 'xml-loader' 
	},
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
 	
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle-front.js'
  },
   plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    	host: '0.0.0.0',
	disableHostCheck: true,
	contentBase: './dist'
  }
};
