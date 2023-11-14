const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const colorFilterLoader = require()

const config = {
    entry: {
        main: './source.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        assetModuleFilename: '[hash][ext][query]'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: path.resolve('../dist/cjs.js'),
                    },
                ]
            }
        ]
    }
};

module.exports = (env, argv) => {
    return config;
}