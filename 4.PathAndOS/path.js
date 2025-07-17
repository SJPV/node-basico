import path from "node:path";

// ruta relativa
const archivo = "documento/texto.txt";

export const fnPath = () => {
console.log('Ruta completa:', path.resolve(archivo));
console.log('Nombre archivo:', path.basename(archivo));
console.log('Extensión:', path.extname(archivo));
console.log('Ruta sin archivo:', path.dirname(archivo));

const info = path.parse(archivo);
console.log('Parseado:', info);

// Unir rutas de forma segura
const fullPath = path.join('user', 'archivos', 'nota.txt');
console.log('Ruta unida:', fullPath);
}

