const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "production",
  // devtool: "source-map",
  cache: false,
  watch: true,
  resolve: {
    alias: {
      "@scripts": path.resolve(__dirname, "src/vue"),
      "@vue": path.resolve(__dirname, "src/vue")
    }
  },
  entry: "./src/scripts/index.js",
  output: {
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          // { loader: "source-map-loader", options: { enforce: "pre" } },
          { loader: "babel-loader" }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              config: { path: path.resolve(__dirname, "postcss.config.js") }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.css"
    }),
    new VueLoaderPlugin()
  ]
}