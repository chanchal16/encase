const HtmlWebPackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path')

var mode = process.env.NODE_ENV || 'production';
module.exports = {
  entry:path.resolve(__dirname,'src','index.jsx'),
  mode:mode,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env",["@babel/preset-react", {"runtime": "automatic"}]]
          }
        }
      },
      {
				test: /\.css$/i,
				use: ["style-loader", "css-loader",'postcss-loader',]			
      },
      {
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource"
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new CompressionPlugin({
      test: /.(js|jsx|css|html|svg|png|jpg|jpeg)$/,
      deleteOriginalAssets: true,
    })
  ],
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true 
  },
  performance: {
    maxEntrypointSize: 400000,
    maxAssetSize: 512000,
  },
  optimization: {
		splitChunks: {
			cacheGroups: {
				node_vendors: {
					name: "vendor",
					test: /[\\/]node_modules[\\/]/,
					chunks: "all",
					priority: 1
				}
			}
		}
	},
  devtool: (mode === 'production') ? false : 'inline-source-map',
	devServer: {
		static: "./dist",
    historyApiFallback: true,
	}
};