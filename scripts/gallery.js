// Cargar imágenes desde images.json
fetch('images.json')
    .then(response => response.json())
    .then(images => {
        const galleryContainer = document.querySelector('.gallery_container');
        images.forEach(imageName => {
            const img = document.createElement('img');
            img.src = `assets/images/${imageName}`; 
            galleryContainer.appendChild(img);
        });
    })
    .catch(error => console.error('Error loading images:', error));
