const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin({
    filename: "bundle.css"
});

module.exports = { 
    entry: "./src/main.js",
    output: { 
        path: __dirname + '/dist', // путь к каталогу выходных файлов
        filename: "bundle.js"  // название создаваемого файла 
    }, 
    module:{ 
        rules:[
            { 
                test: /\.js$/, // какие файлы обрабатывать
                exclude: /node_modules/, // какие файлы пропускать
                use: { loader: "babel-loader" } // какой загрузчик использовать
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    use: ["css-loader"]
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader:'file-loader',
                query: {
                    name: 'img/[name].[ext]'
                }
            },
            {
              test: /\.(html)$/,
              use: {
                loader: 'html-loader'
              }
              
              //use: [ 'file-loader?name=[path][name].[ext]!extract-loader!html-loader' ]
            }
        ] 
    },
    plugins: [
        extractCSS
    ]
}