const path = require('path'); //commonJS

//configuração do wabpack
module.exports = {
    //mode: 'development',
    mode: 'production',
    entry:'./frontend/main.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            exclude:/node_modules/,
            test:/\.js$/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/env']
                }
            }
        },{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }
    ]
    },
    //Mapeia o erro no arquivo original
    devtool: 'source-map'
}