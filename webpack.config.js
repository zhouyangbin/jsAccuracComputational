const path = require("path");
const webpack = require("webpack");

module.exports = {
	mode: "development",
    entry:  __dirname + "/main.js", // 之前提到的唯一入口文件
    output: {
        path: __dirname + "/dist", // 打包后的文件存放的地方
        filename: "index.js" // 打包后输出文件的文件名
    },
	module:{
		rules:[
			{
				test: /\.js$/,
				 exclude: /node_modules/, 
				 loader: "babel-loader"
			}
		]
	}
}
