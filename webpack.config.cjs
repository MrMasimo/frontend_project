const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist/"),
        filename: "bundle.js",
        clean: true
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            filename: "./index.html",
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({ filename: "[name].css" })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }
        ]
    }
};
