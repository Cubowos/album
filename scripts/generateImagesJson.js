const fs = require('fs');
const path = require('path');


const imageFolder = path.resolve(__dirname, '..', 'assets', 'images'); 

const outputFolder = path.join(__dirname,'..', 'images.json'); 

// Lee los archivos de la carpeta y filtra solo las imágenes
fs.readdir(imageFolder, (err, files) => {
    if (err) {
        console.error('Error al leer la carpeta:', err);
        return;
    }

    // Filtra solo archivos de imagen
    const imageFiles = files.filter(file => {
        return file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.gif');
    });

    // Genera el archivo JSON con los nombres de los archivos de imagen
    fs.writeFile(outputFolder, JSON.stringify(imageFiles, null, 4), err => {
        if (err) {
            console.error('Error al escribir el archivo JSON:', err);
            return;
        }
        console.log('Archivo images.json creado con éxito!');
    });
});
