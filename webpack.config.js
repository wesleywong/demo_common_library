const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const path = require('path');
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: [
          //'style-loader', // creates style nodes from JS strings
          //'css-loader', // translates CSS into CommonJS
          //'sass-loader' // compiles Sass to CSS, using Node Sass by default
					// fallback to style-loader in development
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
			{
	      test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
	      loader: 'url-loader?limit=100000'
		  },
    ]
  },
	node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
	optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
	resolve: {
	  modules: [path.resolve(__dirname, './src'), 'node_modules'],
	  extensions: ['.js', '.jsx', '.json'],
	  alias: {
	    //reducers: path.resolve(__dirname, './src/reducers')
	  }
	},
	output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'main.js',
		publicPath: '',
  },
	devServer: {
	   historyApiFallback: true,
	   contentBase: './',
	   hot: true
	},
  plugins: [
		new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
		new InterpolateHtmlPlugin({
			PUBLIC_URL: process.env.NODE_ENV !== 'production' ? 'public' : ''
		}),
		new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css'
    })
  ]
};
