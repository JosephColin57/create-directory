// Importa el módulo 'fs'
const fs = require('fs');

const nombreDirectorio = 'mi_carpeta';

try {
    fs.mkdirSync(nombreDirectorio);
    console.log('Directorio creado exitosamente');
} catch (err) {
    // console.log('Objeto de error completo:', err);
    if (err.code === 'EEXIST') {
        console.error('Error: El directorio ya existe');
    } else {
        console.error('Error al crear el directorio:', err);
    }
}