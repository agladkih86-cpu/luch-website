// ============================================
// ИНТЕРАКТИВНЫЙ САЙТ В СТИЛЕ APPLE
// Parallax, Scroll Animations, Moving Background
// ============================================

// --- Smooth Scroll ---
document.querySelectorAll('.smooth-scroll').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// --- Parallax Background ---
const parallaxBg = document.getElementById('parallax-bg');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// --- Logo Animation on Scroll ---
const logo = document.getElementById('logo');
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (scrolled > 100) {
        logo.style.transform = `scale(${1 - scrolled * 0.0005}) translateY(${scrolled * 0.3}px)`;
        logo.style.opacity = Math.max(0.3, 1 - scrolled * 0.001);
    } else {
        logo.style.transform = 'scale(1) translateY(0)';
        logo.style.opacity = 1;
    }
});

// --- Scroll Reveal Animations ---
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Наблюдаем за всеми элементами с data-scroll
document.querySelectorAll('[data-scroll]').forEach(el => {
    el.classList.add('scroll-hidden');
    observer.observe(el);
});

// --- Parallax для картинок портфолио ---
const portfolioItems = document.querySelectorAll('[data-parallax]');
window.addEventListener('scroll', () => {
    portfolioItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const speed = parseFloat(item.getAttribute('data-parallax')) || 0.3;
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const yPos = -(scrolled - item.offsetTop) * speed;
            item.style.transform = `translateY(${yPos}px)`;
        }
    });
});

// --- Animated Light Rays ---
const rays = document.querySelectorAll('.ray');
rays.forEach((ray, index) => {
    ray.style.animationDelay = `${index * 0.5}s`;
});

// --- Form Validation ---
const form = document.querySelector('.contact-form form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.');
        form.reset();
    });
}

// --- Mouse Follow Effect на Hero ---
const hero = document.querySelector('.hero');
hero.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const xPos = (clientX / innerWidth - 0.5) * 20;
    const yPos = (clientY / innerHeight - 0.5) * 20;
    
    parallaxBg.style.transform = `translate(${xPos}px, ${yPos}px)`;
});

console.log('✨ Интерактивный сайт ЛУЧ загружен');
