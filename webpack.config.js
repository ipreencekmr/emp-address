const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
// eslint-disable-next-line no-unused-vars
module.exports = (_, argv) => ({
    output: {
        publicPath: argv.mode == "development" ?
            "http://localhost:3007/":
            "http://app.learn-coding.xyz:3007/",
    },

    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
        port: 3007,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "emp_address",
            filename: "remoteEntry.js",
            remotes: {
                emp_employee: argv.mode == "development" ?
                    "emp_employee@http://localhost:3006/remoteEntry.js":
                    "emp_employee@http://app.learn-coding.xyz:3006/remoteEntry.js"
            },
            exposes: {
                "./Address": "./src/App.jsx",
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                },
            },
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        }),
    ],
});
