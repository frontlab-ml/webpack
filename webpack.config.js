const path               = require("path");
const webpack            = require("webpack");
const HtmlWebpackPlugin  = require("html-webpack-plugin");
const ExtractTextPlugin  = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  // Source Map in any files
  devtool: 'inline-source-map',

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    stats: "errors-only",
    open: true
  },
  
  module: {
    rules: [
      // SCSS and CSS
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
        // use: ExtractTextPlugin.extract({
        //   fallback: "style-loader",
        //   use: [
        //     "css-loader",
        //     "sass-loader"
        //   ], 
        //   publicPath: "/dist"
        // })
      },
      // JavaScript
      {
        test: /\.js$/,
         exclude: /node_modules/,
        use: "babel-loader"
      },
      // Images
      {
        test: /\.(png|jpg|svg|gif|ico)$/,
        use: [
          'file-loader'
        ]
      },
      // Fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist']),

    new HtmlWebpackPlugin({
      title: "Project webpack",
      hash: "true",
      template: "./src/index.html"
    }),

    new ExtractTextPlugin({
      filename: "style.css",
      disable: false,
      allChunks: true
    }),

    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}



