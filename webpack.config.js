const path = require('path');
const fs = require("fs");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rules = [
    {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    sourceMap: true
                }
            },
            {
                loader: "sass-loader",
                options: {
                    sourceMap: true
                }
            }
        ]
    },
    {
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
    }
]

module.exports = {
    target: "web",
    mode: "development",
    entry: ["./index.tsx", "./styles/main.scss"],
    output: {
        path: path.resolve(__dirname, "public"),
        publicPath: "/",
        filename: "scripts/[name].app.js",
        chunkFilename: "scripts/[name].app.js"
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "initial",
                },
            },
        },
    },
    module: { rules },
    resolve: {
        modules: ["src", "node_modules"],
        extensions: [".ts", ".tsx", ".jsx", ".js", ".scss"]
    },
    devServer: {
        https: true,
        host: "localhost",
        cert: fs.readFileSync('/Volumes/Transcend/Drive/Projects/Active/ts-app3/ssl/localhost.crt'),
        key: fs.readFileSync('/Volumes/Transcend/Drive/Projects/Active/ts-app3/ssl/localhost.key'),
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true,
        compress: true,
        port: 8443
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].app.css"
        }),
    ]
};