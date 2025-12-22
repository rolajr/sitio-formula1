// Script simple para interactividad
console.log('Sitio Fórmula 1 cargado correctamente');

// Efecto al hacer scroll
document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
    }
});

// Función para navegación activa
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav a').forEach(l => l.style.color = 'white');
        this.style.color = '#DC0000';
    });
});
