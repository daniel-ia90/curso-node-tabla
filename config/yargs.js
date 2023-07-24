const argv = require('yargs')
                .options({
                    'b' : {
                        alias : 'base',
                        type:'number',
                        demandOption:true,
                        describe : 'Es la base de la tabla de multiplicar.'
                    },
                    'l' :{
                        alias : 'listar',
                        type: 'boolean',
                        default:false,
                        describe : 'Muestra la tabla de multiplicar en consola.'
                    },
                    'h' :{
                        alias : 'hasta',
                        type: 'number',
                        //demandOption:true,
                        default:10,
                        describe : 'establece el limite del segundo factor de la tabla.'
                    }                   
                })
                .check( (argv, options) => {
                   console.log(argv);
                    if( isNaN(argv.b) ){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;

module.exports = argv;