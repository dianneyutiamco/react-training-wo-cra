const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // entry : "./src/index.js",

    // enable sourcempas for debugging webpack's output
    // devTool : "source-map",
    resolve : {
        // Add '.ts' and '.tsx' as resolvable extensions
        extensions : [".ts", ".tsx", ".js"]
    },
    module : {
        rules : [
            {
                test : /\.ts(x?)$/,
                exclude : /node_modues/,
                use : [{
                    loader : "ts-loader"
                }]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
              test: /\.(s*)css$/,
              loader: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    output : {
        path : __dirname + '/dist', // path.resolve(__dirname, 'build')
        filename : "bundle.js",
        publicPath : "/"
    },
    devServer : {
        contentBase : "./dist", // if running on webpack-dev-server, serve content from here
        writeToDisk : true,
        historyApiFallback: true //  solves the Cannot Get URL * issue : https://stackoverflow.com/questions/43209666/react-router-v4-cannot-get-url
    },
    plugins : [
        new HtmlWebpackPlugin ({
            template: "src/index.html"
        })
    ]
    
    // TODO : add HTMLWebPack Plug-in to generate index.html in the same directory as bundle.js
}