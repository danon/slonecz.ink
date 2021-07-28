const path = require('path');
const {HotModuleReplacementPlugin} = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const plugins = [
  new CopyPlugin({
    patterns: [
      {from: "./src/images", to: "images"},
      path.resolve(__dirname, "src", "images")
    ],
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html',
    favicon: './src/assets/favicon.ico'
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].css'
  }),
  new HotModuleReplacementPlugin(),
];

function styleRules(dev) {
  return [
    dev ? 'style-loader' : MiniCssExtractPlugin.loader,
    'css-loader',
  ];
}

const rules = dev => [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env', "@babel/preset-react"],
        babelrc: false,
        plugins: [
          [
            "@babel/plugin-transform-runtime", {
            asyncGenerators: false,
            generators: false,
            async: false
          }]
        ]
      },
    }
  },
  {
    test: /\.(eot|svg|ttf|woff|woff2?)$/,
    use: {
      loader: 'file-loader'
    }
  },
  {
    test: /\.css$/,
    use: styleRules(dev)
  },
  {
    test: /\.scss$/,
    use: [...styleRules(dev), 'sass-loader'],
  },
  {
    test: /\.(png|gif|jpe?g)$/,
    loader: 'file-loader',
  },
];

module.exports = (env, argv) => ({
  mode: argv.mode || 'development',
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    clean: true
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    rules: rules(!argv.mode || argv.mode === 'development')
  },
  plugins,
  devServer: {
    hot: true,
    historyApiFallback: true,
  }
});
