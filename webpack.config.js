const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const portFinderSync = require('portfinder-sync');

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const pageTitle = 'React component';
const port = portFinderSync.getPort(3000);

console.log('development = ' + isDev, 'production = ' + isProd)

const config = {
    entry: './src/js/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },

    devtool: isDev ? 'eval-cheap-module-source-map' : false,

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            publicPath: './',
                        }
                    }
                ]
            },
        ]
    },

    optimization: {
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: isDev ? false : true,
              },
            },
          }),
        ],
      },


    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: pageTitle,
            template: './src/index.html',
            inject: 'body',
            minify: false,
            hash: isProd ? true : false
        }),
    ],

    devServer: {
        historyApiFallback: true,
        port: port,
        open: true,
        hot: true,
        inline: true,
        overlay: {
            warnings: true,
            errors: true
        },
        contentBase: path.join(__dirname, 'src'),
        public: `localhost:${port}`,
    }
}

module.exports = () => config;
