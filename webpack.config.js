const webpack = require('webpack');
const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	devServer: {
		contentBase: path.join(__dirname, './src'),
		hot: true
	},
	devtool: 'cheap-source-map',
	entry: [
		'react-hot-loader/patch',
		'./app.js',
	],
	module: {
		rules: [{
		  test: /\.jsx?$/,
		  loader: 'babel-loader',
		  exclude: /node_modules/,
		  query: {
			presets: [['es2015', {'modules': false}], 'react'],
			plugins: [
				'transform-object-rest-spread',
				// 'lodash'
			]
		  }
		},
		{
		      test: /\.s?css$/,
		      use: [ {
					loader:'style-loader',
				  	options: {
						sourceMap: true
					}
				},
		        {
		          loader:'css-loader',
		          options: {
		            sourceMap: true,
		            importLoaders: 1
		          }
		        },
		        {
		          loader: 'postcss-loader',
		          options: {
		            sourceMap: 'inline',
		            plugins: () => [
		              require('postcss-smart-import'),
		              require('precss'),
		              require('autoprefixer')({
		                browsers: 'last 2 versions'
		              }),
		            ]
		          }
		        }
		      ]
		}]
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, './public'),
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
		new HtmlWebpack({
		  template: path.join(__dirname, './src/index.html'),
		  filename: 'index.html',
		  inject: 'body', // inject at the bottom of the body tag
		}),
	]
}

//   /*return env == 'production' ?
//     developmentConfig :*/
//   console.log(env, 'environment');
//   return defaultConfig;
// };


// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const HtmlWebpack = require('html-webpack-plugin');
//
// //const nodeEnv = process.env.NODE_ENV || 'development';
// //const isProduction = nodeEnv === 'production';
//
// // TODO: https://webpack.js.org/guides/production-build/
// process.traceDeprecation = true;
// const defaultConfig = {
//   context: path.resolve(__dirname, 'nodeSource'),
//   devServer: {
//     //hotOnly: true
//     contentBase: path.join(__dirname, './wwwroot'),
//     hot: true
//   },
//   devtool: 'cheap-source-map',
//   entry: {
//     app: [
//       'react-hot-loader/patch',
//       './app.js'
//     ]
//   },
//   module: {
//     rules: [{
//       test: /\.jsx?$/,
//       loader: 'babel-loader',
//       exclude: /node_modules/,
//       query: {
//         presets: [['es2015', {'modules': false}], 'react'],
//         plugins: ['transform-object-rest-spread', 'lodash']
//       }
//     },  {
//       test: /\.s?css$/,
//       use: [ 'style-loader',
//         {
//           loader:'css-loader',
//           options: {
//             sourceMap: 'true',
//             importLoaders: 1
//           }
//         },
//         {
//           loader: 'postcss-loader',
//           options: {
//             sourceMap: 'inline',
//             plugins: () => [
//               require('postcss-smart-import'),
//               require('precss'),
//               require('autoprefixer')({
//                 browsers: 'last 2 versions'
//               }),
//             ]
//           }
//         }
//       ]
//     }, {
//       test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//       loader: 'url-loader?limit=10000&mimetype=application/font-woff'
//     }, {
//       test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
//       loader: 'file-loader'
//     }]
//   },
//   output: {
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, './wwwroot'),    //publicPath: './wwwwroot'
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new webpack.NamedModulesPlugin(),
//     new LodashModuleReplacementPlugin,
//     new ExtractTextPlugin('styles.css'),
//     new HtmlWebpack({
//       template: path.join(__dirname, './wwwroot/index.html'),
//       filename: 'index.html',
//       inject: 'body', // inject at the bottom of the body tag
//     }),
//   ],
//   watch: true,
// };
//

// module.exports = env => {
//   /*return env == 'production' ?
//     developmentConfig :*/
//   console.log(env, 'environment');
//   return defaultConfig;
// };
