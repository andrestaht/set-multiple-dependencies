"use strict";

var path = require("path");

var targetPath = path.join(__dirname, "target", "dist");

module.exports = {
    node: {
        fs: "empty"
    },
    entry: {
        app: path.join(__dirname, "src", "Stats.js")
    },
    output: {
        path: targetPath,
        filename: "Stats.min.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                include: path.join(__dirname, "src")
            }
        ]
    },
    resolve: {
        root: [
            path.resolve(__dirname, "src"),
            path.resolve(__dirname, "node_modules")
        ],
        extensions: ["", ".js"]
    },
    resolveLoader: {
        root: path.join(__dirname, "node_modules")
    }
};
