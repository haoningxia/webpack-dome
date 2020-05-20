const path = require('path');//引用path模块；

module.exports  = {
    mode: 'production',//当前是什么环境生产环境。developemnt研发环境，打的包不进行压缩 
    entry: './src/index.js', //打包哪个文件 
    output: {
        filename: 'webpackDom.js',//  打包 的文件名字
        path:  path.resolve(__dirname, 'webpackDom')//存放在webpackDom文件下
    }
}