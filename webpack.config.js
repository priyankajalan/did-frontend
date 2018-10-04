const weboack = require('webpack');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
    mode: 'development',
    entry: SRC_DIR + '/app/index.js',
    output: {
        path: DIST_DIR + '/app',
        filename: 'bundle.js',
        publicPath: '/app/',
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.js?/, 
                include: SRC_DIR, 
                loader: 'babel-loader', 
                query: { 
                    presets: ['react','es2015','stage-2'],
                    plugins: ['transform-decorators-legacy']
                }
            }
        ]
    }
}

module.exports = config;