// Manejo del overlay del video
document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.getElementById('close-overlay');
    const overlay = document.getElementById('video-overlay');

    if (closeButton && overlay) {
        closeButton.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
    } else {
        console.error('Botón o overlay no encontrado en el DOM.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('intro-video');
    video.volume = 0.1; // Establecer el volumen 
    video.autoplay=false;
});

document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.getElementById('close-overlay');
    const overlay = document.getElementById('video-overlay');
    const video = document.getElementById('intro-video');

    // Bton de cierre
    if (closeButton && overlay && video) {
        closeButton.addEventListener('click', () => {
            // Pausar el video
            video.pause();
            // Restablecer el video al inicio (opcional)
            video.currentTime = 0;
            // Ocultar el overlay
            overlay.style.display = 'none';
        });
    } else {
        console.error('Botón o overlay o video no encontrado en el DOM.');
    }
});
