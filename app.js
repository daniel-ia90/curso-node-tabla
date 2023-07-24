/*
const {crearArchivo} = require('./helpers/multiplicar');

console.clear();
const base = 4;
crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo,' xcreado'))
    .catch( err => console.log(err));
    
*/

/*
const {crearArchivo} = require('./helpers/multiplicar');

console.clear();

const [, , arg3 = 'base=5'] = process.argv;
const [ , base = 5 ] = arg3.split('=');

crearArchivo(base)
    .then(nombreArchivo => console.log(nombreArchivo,' xcreado'))
    .catch( err => console.log(err));
    

*/

/*    
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs').argv;
console.clear();

console.log(process.argv);

console.log(argv);
*/

const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');

console.clear();
//console.log(argv);

crearArchivo(argv.b,argv.l,argv.h )
    .then(nombreArchivo => console.log(nombreArchivo,' xcreado'.bgRed))
    .catch( err => console.log(err));
