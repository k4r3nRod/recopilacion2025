// Crear estrellas de fondo
function createStars() {
    const starsContainer = document.getElementById('stars');
    const numStars = 100;
    
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 1 + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 2 + 's';
        starsContainer.appendChild(star);
    }
}

// Crear corazones y carritos flotantes (estilo Hot Wheels)
function createHearts() {
    const heartsContainer = document.getElementById('hearts');
    const items = ['💜', '🏎️', '💕', '🔥', '💗', '🚗', '🤍', '⭐', '💟', '🏁'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = items[Math.floor(Math.random() * items.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 10000);
    }, 1500);
}

// Efecto parallax suave en scroll
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const stars = document.getElementById('stars');
        if (stars) {
            stars.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// Efecto de chispas/fuego en hover de las tarjetas
function initCardEffects() {
    const cards = document.querySelectorAll('.photo-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Crear efecto de chispa
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const spark = document.createElement('div');
                    spark.textContent = '✨';
                    spark.style.position = 'absolute';
                    spark.style.left = Math.random() * 100 + '%';
                    spark.style.top = Math.random() * 100 + '%';
                    spark.style.fontSize = '1.5rem';
                    spark.style.pointerEvents = 'none';
                    spark.style.animation = 'sparkle 0.8s ease-out forwards';
                    spark.style.zIndex = '100';
                    card.appendChild(spark);
                    setTimeout(() => spark.remove(), 800);
                }, i * 100);
            }
        });
    });
}

// Añadir estilos de animación de chispas
function addSparkleStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0% { opacity: 1; transform: scale(0) translateY(0); }
            50% { opacity: 1; transform: scale(1.5) translateY(-20px); }
            100% { opacity: 0; transform: scale(0.5) translateY(-40px); }
        }
    `;
    document.head.appendChild(style);
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    createHearts();
    initParallax();
    addSparkleStyles();
    initCardEffects();
    
    console.log('🏎️ Hot Wheels Love Edition - Cargado con éxito! 💜');
});
