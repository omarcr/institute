// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        navMenu.classList.remove('active');
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu on outside click
document.addEventListener('click', function(e) {
    if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Hero Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.carousel-dot');

function showSlide(index) {
    slides.forEach((slide, idx) => {
        slide.classList.remove('active');
        slide.style.left = idx === index ? '0' : '100%';
    });
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentSlide = index;
}

dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        showSlide(idx);
    });
});

// Auto-slide
setInterval(() => {
    let nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
}, 5000);

// Tabs Functionality
const tabLinks = document.querySelectorAll('.tab-links li');
const tabs = document.querySelectorAll('.tab');

tabLinks.forEach((link, index) => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.tab-links .active').classList.remove('active');
        document.querySelector('.tab-content .active').classList.remove('active');

        this.classList.add('active');
        tabs[index].classList.add('active');
    });
});

// Filterable Projects Gallery
const filterBtns = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelector('.filter-btn.active').classList.remove('active');
        this.classList.add('active');
        const filter = this.getAttribute('data-filter');
        projectItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Form Validation for Contact Form
const contactForm = document.getElementById('contact-form');
const contactInputs = contactForm.querySelectorAll('input, textarea');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    contactInputs.forEach(input => {
        const errorMessage = input.nextElementSibling;
        if (!input.validity.valid) {
            errorMessage.textContent = 'Please fill out this field.';
            valid = false;
        } else {
            errorMessage.textContent = '';
        }
    });

    if (valid) {
        // Placeholder for form submission logic
        alert('Thank you for contacting us!');
        contactForm.reset();
    }
});

// Form Validation for Newsletter Form
const newsletterForm = document.getElementById('newsletter-form');
const newsletterEmail = document.getElementById('newsletter-email');

newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (newsletterEmail.validity.valid) {
        // Placeholder for newsletter subscription logic
        alert('Thank you for subscribing!');
        newsletterForm.reset();
    } else {
        alert('Please enter a valid email address.');
    }
});

// Language Toggle Placeholder
const languageToggle = document.getElementById('language-toggle');

languageToggle.addEventListener('change', function() {
    const selectedLanguage = this.value;
    if (selectedLanguage === 'es') {
        // Placeholder for switching to Spanish content
        alert('Cambio de idioma a español (funcionalidad en desarrollo).');
    } else {
        // Placeholder for switching to English content
        alert('Language switched to English.');
    }
});
