

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initSmoothScroll();
    initRevealAnimations();
    initSkillBars();
    initScrollProgress();
    initMobileMenu();
    initTouchGlow();
});


function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;


        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });
}



function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);

            if (target) {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });


                closeMobileMenu();
            }
        });
    });
}



function initRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}


function initSkillBars() {
    const skillFills = document.querySelectorAll('.skill-fill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const width = fill.getAttribute('data-width');
                fill.style.width = width + '%';
                fill.classList.add('animated');
                observer.unobserve(fill);
            }
        });
    }, {
        threshold: 0.5
    });

    skillFills.forEach(fill => observer.observe(fill));
}



function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;

        progressBar.style.width = progress + '%';
    }, { passive: true });
}



/* Contact form logic removed */



function initMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('open');
        document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    });
}

function initTouchGlow() {
    const interactives = document.querySelectorAll('.contact-link, .project-link, .back-to-top, .nav-link, .btn, .nav-toggle');
    
    interactives.forEach(el => {
        el.addEventListener('touchstart', () => {
            el.classList.add('touch-active');
        }, { passive: true });
        
        el.addEventListener('touchend', () => {
            setTimeout(() => {
                el.classList.remove('touch-active');
            }, 400);
        }, { passive: true });
    });
}

function closeMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');

    if (toggle && menu) {
        toggle.classList.remove('active');
        menu.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// ============================================
// ACTIVE NAV LINK — Highlight on scroll
// ============================================

(function initActiveNav() {
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');

                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
    });

    sections.forEach(section => observer.observe(section));
})();

// ============================================
// SUBTLE CURSOR GLOW (Desktop only)
// ============================================

// ============================================
// SUBTLE BACKGROUND PARALLAX
// ============================================

(function initBackgroundParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.body.style.backgroundPositionY = -(scrolled * 0.15) + 'px';
    }, { passive: true });
})();

(function initCursorGlow() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const glow = document.createElement('div');
    glow.style.cssText = `
        position: fixed;
        width: 600px;
        height: 600px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(189,187,178,0.03) 0%, transparent 70%);
        pointer-events: none;
        z-index: 0;
        transition: transform 0.2s ease-out;
        will-change: transform;
    `;
    document.body.appendChild(glow);

    document.addEventListener('mousemove', (e) => {
        glow.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
    }, { passive: true });
})();

// ============================================
// CONSOLE BRANDING
// ============================================

console.log(
    '%cPORTFOLIO.',
    'color: #EDEDED; font-size: 24px; font-weight: 200; font-family: Montserrat, sans-serif; letter-spacing: 4px;'
);
console.log(
    '%cDark. Minimalist. Precise.',
    'color: #BDBBB2; font-size: 10px; font-family: Montserrat, sans-serif; text-transform: uppercase; letter-spacing: 2px;'
);
