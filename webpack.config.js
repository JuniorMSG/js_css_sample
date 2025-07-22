// node.js 환경에서 동작함.
// webpack.config.js 파일은 웹팩(Webpack) 설정 파일입니다. 이 파일은 웹팩이 프로젝트를 번들링할 때 필요한 설정 정보를 포함하고 있습니다.
// entry: 'js/webpack.js'
// - 웹팩이 번들링을 시작할 진입점(entry point) 파일을 지정합니다. 여기서는 'js/webpack.js' 파일이 진입점입니다.

const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/webpack.js',

    // 번들을 반환하는 설정
    output: {
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'webpack.js',
        clean: true
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlWebpackPlugin({
            template: './html/webpack.html' // webpack.config.js 파일은 웹팩(Webpack) 설정 파일입니다. 이 파일은 웹팩이 프로젝트를 번들링할 때 필요한 설정 정보를 포함하고 있습니다.
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' },
                { from: 'images' }
            ]
        })
    ],

    devServer: {
        host: 'localhost',
        port: 9090
    },

    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    }
}