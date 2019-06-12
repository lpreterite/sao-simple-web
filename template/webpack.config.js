const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default

const devMode = process.env.NODE_ENV !== 'production'

const conf = {
    entry: ["./src/"],
    outputPath: "dist",
    publicPath: ""
}

module.exports = {
    entry: conf.entry,
    output: {
        path: path.resolve(__dirname, conf.outputPath),
        publicPath: devMode ? "":conf.publicPath
    },
    module: {
      rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        },
        {
            test: /\.(sa|sc|c)ss$/,
            use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    hmr: devMode,
                  },
                },
                'css-loader',
                'postcss-loader'
            ]
        },
        {
            test: /\.(png|jpe?g|gif)$/,
            loader:'file-loader',
            options: {
                outputPath: path.resolve(__dirname, "assets/images"),
            }
        }
      ]
    },
    plugins: [
        new CopyPlugin([{ from: "./src/assets", to: "assets" }]),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].css?[hash]',
            chunkFilename: devMode ? '[id].css' : '[id].css?[hash]',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            hash: true
        }),
        new ImageminPlugin({
            test: /\.(png|jpe?g|gif)$/,
            disable: devMode,
            pngquant: {
                quality: '65-80'
            }
        })
    ],
    devtool: devMode ? "source-map" : "inline-source-map",
    devServer: {
        port: 2360,
        hot: true,
        compress: true,
        publicPath: devMode ? "":conf.publicPath
    }
}