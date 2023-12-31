
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta) => {

    try {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta; i ++) {            
            consola += `${base} x ${i} = ${ colors.bgGreen(base * i)} \n`;     
            salida += `${base} x ${i} = ${ base * i} \n`;
        }

        if(listar){
            console.log('==================='.red);
            console.log(`    Tabla del : ${base}`);
            console.log('==================='.red);    
            console.log(consola);
        }
      

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        
        return `tabla-${base}.txt `;
    } catch (err) {
        throw err;
    }
}


module.exports = {
    crearArchivo
}