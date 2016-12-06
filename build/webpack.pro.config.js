/**
 * Created by linxiaojie on 2016/11/2.
 */
const path = require('path')
const ROOT_PATH = path.resolve(__dirname)
const SRC_PATH = path.resolve(ROOT_PATH, '../src')
const BUILD_PATH = path.join(ROOT_PATH, '../dist')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const util = require('./util')

module.exports = {
    /*入口配置*/
    entry: {
        main: path.resolve(SRC_PATH, 'main.js'),
        other: path.resolve(SRC_PATH, 'other.js')
    },
    /*编译输出配置*/
    output: {
        /*页面存放根路径*/
        path: BUILD_PATH,
        /*静态资源编译路径, file-loader之类的静态静态资源会拼接这个路径作为访问地址*/
        publicPath: '../',
        /*输出的入口文件*/
        filename: '[name].js',
        /*入口文件内部webpack优化生产的文件*/
        chunkFilename: '[id].chunk.js'
    },
    /*定义全局变量: require('jquery')会返回window.jQuery*/
    externals: {
        'jquery': 'window.jQuery'
    },
    /*文件加载模块配置*/
    module: {
        loaders: [
            /*解析css*/
            {
                test: /\.(css|less)$/,
                /*include: []*/
                /*exclude: []*/
                loader: ExtractTextPlugin.extract('css?minimize&importLoaders=1!postcss!less')
            },
            /*加载图片*/
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 1000,
                    name: util.assetsPath('img/[name].[ext]')
                }
            },

            /*字体*/
            {
                // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
                test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
                loader: 'file',
                query: {
                    name: util.assetsPath('fonts/[name].[ext]')
                }
            }
        ]
    },
    /*postcss配置*/
    postcss: function () {
      return [autoprefixer({
          remove: false,
          browser: [
              'ie >= 8',
              'ie_mob >= 10',
              'ff >= 30',
              'chrome >= 34',
              'safari >= 7',
              'opera >= 23',
              'ios >= 7',
              'android >= 2.3',
              'bb >= 10']
      })]
    },
    plugins: [
        /*提取公共代码*/
        new webpack.optimize.CommonsChunkPlugin({
            /*设置公共模块的chunk名称，唯一标识*/
            name: 'commons',
            /*生成文件名*/
            filename: '[name].bundle.js',
            /*chunks配置需要在哪些模块提取公共代码，不配置默认全部*/
            chunks: ['main', 'other'],
            /*至少多少个chunk使用才可以提取为公共代码*/
            minChunks: 2
        }),
        /*自动导入模块，页面上使用下面定义的变量时不需要require*/
        /*new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
        })*/
        /*提取css到文件*/
        new ExtractTextPlugin(util.assetsPath('css/[name].css'))
    ]
};