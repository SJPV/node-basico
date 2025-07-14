const fs = require('fs').promises

const promesa = async () =>  {

    await fs.appendFile('./Files/prueba.txt', '\nNueva Linea agregada - Promises');

    const contenido = await fs.readFile('./Files/prueba.txt', 'utf8');
    console.log(contenido);

    await fs.writeFile('./Files/nuevo-promesas.txt', 'Archivo creado con (fs).promises');
    console.log('Archivo creado');
} 

promesa();