const fs = require('fs');

const contenido = fs.readFileSync('./Files/prueba.txt', 'utf8');

fs.writeFileSync('./Files/nuevo-sync.txt', 'Usando el WriteFileSync');

module.exports = { contenido };



