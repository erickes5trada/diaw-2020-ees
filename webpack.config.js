const path = require('path')
//console.log(`Ruta de index.js: ${path.join(__dirname, './src/index.js')}`);

module.exports = {
    // 1. especificando el arhivo index de entrada
    entry: path.join(__dirname, './src/index.js'),
    // 2. especificar el archivo de salida
    output: {
        path: path.join(__dirname,'/dist') ,
        filename: 'bundle.js'
    },
    // 3. folde donde servira
    devServer: {
        contentBase: path.join(__dirname,'./dist') ,
        port: 4040,
        compress: true,
        publicPath: '/'
    }
}