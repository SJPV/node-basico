const fs = require('fs');

const contenido = fs.readFile('./Files/prueba.txt', 'utf8', (err, data) => {
    if(err) {
        console.log('Error: ', err);
        return;
    }
    console.log(data);
});

fs.writeFile('./Files/nuevo-callbacks.txt', `Archivo nuevo
    usando WriteFile y Callbacks`, (err) => {
        if (err) throw err;
        console.log('Archivo Creado');
    });

module.exports = contenido;