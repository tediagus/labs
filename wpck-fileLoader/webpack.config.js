module.exports = {

    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"

    },
    module: {
        laders:  [
            {test: /\.(jp?eg|png)$/, loader: "file-loader"}
        ]
    }

}