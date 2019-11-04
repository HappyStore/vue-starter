const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (env, argv) => {
    return {
        entry: path.resolve(__dirname, 'src'),
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist'),
            chunkFilename: '[name].chunk.js',
        },
        resolve: {
            extensions: ['.ts', '.js'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
            }
        },
        devServer: {
            contentBase: './dist',
            hot: true,
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    use: [{
                        loader: 'ts-loader',
                        options: { appendTsSuffixTo: [/\.vue$/] }
                    }],
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                },
                {
                    test: /\.(scss|css)$/,
                    exclude: /node_modules/,
                    use: [
                        argv.mode !== 'production'
                            ? 'style-loader'
                            : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: ['file-loader']
                },
            ],
        },
        plugins: [
            new VueLoaderPlugin(),
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css',
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(__dirname, 'src/index.html'),
                favicon: path.resolve(__dirname, 'src/assets/favicon.ico'),
                meta: {
                    'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no',
                }
            }),
        ],
    };
};
