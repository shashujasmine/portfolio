/* ============================================
   PORTFOLIO — JAVASCRIPT
   Smooth interactions & scroll effects
   ============================================ */

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initSmoothScroll();
    initRevealAnimations();
    initSkillBars();
    initScrollProgress();
    initContactForm();
    initMobileMenu();
});

// ============================================
// NAVBAR — Scroll-based background & shrink
// ============================================

function initNavbar() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add scrolled class for background blur
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });
}

// ============================================
// SMOOTH SCROLLING — Navigation links
// ============================================

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

                // Close mobile menu if open
                closeMobileMenu();
            }
        });
    });
}

// ============================================
// REVEAL ANIMATIONS — Intersection Observer
// ============================================

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

// ============================================
// SKILL BARS — Animate on scroll
// ============================================

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

// ============================================
// SCROLL PROGRESS BAR
// ============================================

function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;

        progressBar.style.width = progress + '%';
    }, { passive: true });
}

// ============================================
// CONTACT FORM — Validation & Feedback
// ============================================

function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !message) return;

        // Visual feedback
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sent ✓';
        submitBtn.style.background = 'var(--color-muted)';
        submitBtn.disabled = true;

        // Log the submission (replace with real API in production)
        console.log('Form submitted:', { name, email, message });

        // Reset after delay
        setTimeout(() => {
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            submitBtn.disabled = false;
        }, 2500);
    });

    // Focus effects for form inputs
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused');
        });
    });
}

// ============================================
// MOBILE MENU
// ============================================

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

(function initCursorGlow() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const glow = document.createElement('div');
    glow.style.cssText = `
        position: fixed;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(175,172,161,0.04) 0%, transparent 70%);
        pointer-events: none;
        z-index: 0;
        transition: transform 0.15s ease;
        will-change: transform;
    `;
    document.body.appendChild(glow);

    document.addEventListener('mousemove', (e) => {
        glow.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    }, { passive: true });
})();

// ============================================
// CONSOLE BRANDING
// ============================================

console.log(
    '%cportfolio.',
    'color: #C9C8BF; font-size: 24px; font-weight: 600; font-family: sans-serif;'
);
console.log(
    '%cMinimal. Modern. Intentional.',
    'color: #AFACA1; font-size: 12px; font-family: sans-serif;'
);
