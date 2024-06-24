// required for path resolution for dist folder
const path = require("path");
// used to access the BannerPlugin
const webpack = require("webpack");
// required for pretty format for the Userscript banner
const stripIndent = require("common-tags").stripIndent;

module.exports = {
    entry: "./src/Main.ts",
    devtool: 'inline-source-map',
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        library: 'Community',
        libraryTarget: 'umd',
        libraryExport:"objectSource",
        path: path.resolve(__dirname, "dist"),
        filename: "lib.user.js"
    },
    plugins: [
        new webpack.BannerPlugin({
            raw: true,
            banner: stripIndent`
                // ==UserScript==
                // @name    Community Lib
                // @namespace   https://path.com/your/lib/namespace
                // @version 1.0.0
                // @author  Your Name
                // @match https://neal.fun/infinite-craft/*
                // @description Your lib description
                // @include https://www.example.com/*
                // @copyright   2024, Your Org
                // ==/UserScript==`
        })
    ]
};