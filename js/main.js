// ============================================
// ПРЕМИАЛЬНЫЙ МИНИМАЛИЗМ
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// ============================================
// ПЛАВНОЕ ПОЯВЛЕНИЕ ЭЛЕМЕНТОВ
// ============================================

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card, .portfolio-item, .feature').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.05}s`;
    observer.observe(el);
});

// ============================================
// ФОРМА
// ============================================

const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const button = this.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'Отправка...';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = 'Отправлено';
            this.reset();
            
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
            }, 2000);
        }, 1000);
    });
}

// ============================================
// ПОРТФОЛИО
// ============================================

const portfolioGrid = document.getElementById('portfolio-grid');
if (portfolioGrid) {
    portfolioGrid.innerHTML = '';
    
    const portfolioExamples = [
        { title: 'BMW 5 Series', description: 'Matrix LED' },
        { title: 'Mercedes-Benz E-Class', description: 'Laser Light' },
        { title: 'Audi A6', description: 'LED Upgrade' },
        { title: 'Tesla Model 3', description: 'Custom LED' },
        { title: 'Porsche Cayenne', description: 'Adaptive System' },
        { title: 'Range Rover', description: 'Premium LED' }
    ];
    
    portfolioExamples.forEach((example) => {
        const item = document.createElement('div');
        item.className = 'portfolio-item';
        item.innerHTML = `
            <div class="portfolio-placeholder">
                <h4>${example.title}</h4>
                <p>${example.description}</p>
            </div>
        `;
        portfolioGrid.appendChild(item);
    });
}
