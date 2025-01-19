const path = require('path'); // this is a common js way of importing modules, beacuse inside the configuration files we cannot use ECMA script modules

module.exports = {
    entry: './src/index.js', // webpack will start from this file when running the build process
                            // this file usually imports all other modules in your application.
    output: { // this option specifies the output file
        filename: 'bundle.js', //name of the file that should be generated as output,
        path: path.resolve(__dirname, './dist')  //path of the output file, this should be an absolute path(if we write ./dist, it will be a relative path)
                                      // here path is a node module that has a resolve function that converts relaive path  to absolute path  
                                      // if the dist folder does not exist, webpack will create the dist folder    
    },
    mode: 'none' ,// this is a mandatory option
    module: {
        rules: [ // there should be a rule to import the different kind of files, if there is no rule to import a particular kind of file, it will give an error
                 // However, for some kind of files webpack inherently knows how to import them like Javascript ot JSON files   
                 // each rule has atleast two properties , first one is test, second one is type or use
           
            {
             test: /\.(ttf)$/,
             type: 'asset/resource'
            },
            {
            test: /\.(png|jpg)$/, // it is a regex for jpg or png
            type: 'asset/resource'//it defines the type of asset modules
           } 
           
        ]
    }
}