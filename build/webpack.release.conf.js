const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

process.env.NODE_ENV = 'production';

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: './src/cmtoolpanel.js'
    },
    output: {
        path: resolve('dist'),
        publicPath: '/dist/',
        filename: 'cmtoolpanel.min.js',
        library: 'cmtoolpanel',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    externals: {
        codemirror: {
            root: 'CodeMirror',
            commonjs: 'codemirror',
            commonjs2: 'codemirror',
            amd: 'codemirror'
        }
    },
    plugins: [
        // @todo
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        // new CompressionPlugin({
        //     asset: '[path].gz[query]',
        //     algorithm: 'gzip',
        //     test: /\.(js|css)$/,
        //     threshold: 10240,
        //     minRatio: 0.8
        // })
    ]
};
