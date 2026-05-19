// ============================================
// ПЛАВНАЯ ПРОКРУТКА К СЕКЦИЯМ
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
// АНИМАЦИЯ ПРИ СКРОЛЛЕ
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Анимируем карточки услуг
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Анимируем элементы портфолио
document.querySelectorAll('.portfolio-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
});

// Анимируем фичи "О студии"
document.querySelectorAll('.feature').forEach((feature, index) => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateX(-50px)';
    feature.style.transition = `all 0.6s ease ${index * 0.2}s`;
    observer.observe(feature);
});

// ============================================
// ФОРМА ОБРАТНОЙ СВЯЗИ
// ============================================

const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Получаем данные формы
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Имитация отправки (в реальности здесь будет AJAX запрос)
        const button = this.querySelector('button');
        const originalText = button.textContent;
        button.textContent = 'Отправка...';
        button.disabled = true;
        
        setTimeout(() => {
            button.textContent = '✓ Заявка отправлена!';
            button.style.background = 'linear-gradient(135deg, #00D900, #00FF00)';
            
            // Очищаем форму
            this.reset();
            
            // Возвращаем кнопку в исходное состояние через 3 секунды
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
                button.style.background = '';
            }, 3000);
        }, 1500);
    });
}

// ============================================
// ПАРАЛЛАКС ЭФФЕКТ ДЛЯ HERO
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-bg');
    const floorLights = document.querySelector('.floor-lights');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    
    if (floorLights) {
        floorLights.style.opacity = Math.max(0, 1 - scrolled / 500);
    }
});

// ============================================
// ДИНАМИЧЕСКОЕ СВЕЧЕНИЕ ЛОГОТИПА
// ============================================

const logo = document.querySelector('.logo');
if (logo) {
    let glowIntensity = 0;
    let increasing = true;
    
    setInterval(() => {
        if (increasing) {
            glowIntensity += 0.5;
            if (glowIntensity >= 40) increasing = false;
        } else {
            glowIntensity -= 0.5;
            if (glowIntensity <= 10) increasing = true;
        }
        
        logo.style.filter = `drop-shadow(0 0 ${glowIntensity}px rgba(255, 255, 255, 0.8))`;
    }, 50);
}

// ============================================
// ДОБАВЛЯЕМ ПРИМЕРЫ РАБОТ (заглушки)
// ============================================

const portfolioGrid = document.getElementById('portfolio-grid');
if (portfolioGrid) {
    // Очищаем placeholder
    portfolioGrid.innerHTML = '';
    
    // Создаём заглушки для примеров работ
    const portfolioExamples = [
        {
            title: 'BMW 5 Series — Matrix LED',
            description: 'Установка адаптивных LED фар'
        },
        {
            title: 'Mercedes-Benz E-Class — Laser Light',
            description: 'Ретрофит лазерного света'
        },
        {
            title: 'Audi A6 — LED Upgrade',
            description: 'Полная модернизация освещения'
        },
        {
            title: 'Tesla Model 3 — Custom LED',
            description: 'Индивидуальная настройка света'
        },
        {
            title: 'Porsche Cayenne — Adaptive System',
            description: 'Установка адаптивной системы'
        },
        {
            title: 'Range Rover — Premium LED',
            description: 'Премиальное LED освещение'
        }
    ];
    
    portfolioExamples.forEach((example, index) => {
        const item = document.createElement('div');
        item.className = 'portfolio-item';
        item.innerHTML = `
            <div class="portfolio-placeholder" style="
                background: linear-gradient(135deg, 
                    rgba(0, 217, 255, 0.1) 0%, 
                    rgba(176, 38, 255, 0.1) 100%);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: 40px;
                text-align: center;
            ">
                <div style="font-size: 60px; margin-bottom: 20px;">🚗</div>
                <h4 style="font-size: 20px; margin-bottom: 10px;">${example.title}</h4>
                <p style="color: rgba(255, 255, 255, 0.6);">${example.description}</p>
                <p style="margin-top: 20px; font-size: 14px; color: rgba(255, 255, 255, 0.4);">
                    [ Фото будет добавлено ]
                </p>
            </div>
        `;
        portfolioGrid.appendChild(item);
    });
}

// ============================================
// КОНСОЛЬ: ИНФОРМАЦИЯ О САЙТЕ
// ============================================

console.log('%c💡 ЛУЧ — Студия автосвета', 'font-size: 24px; font-weight: bold; color: #00D9FF;');
console.log('%cМакет разработан Агентом Свет', 'font-size: 14px; color: #B026FF;');
console.log('%cВерсия: 1.0 (прототип)', 'font-size: 12px; color: #666;');
