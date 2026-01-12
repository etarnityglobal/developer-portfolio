document.addEventListener('DOMContentLoaded', function() {
        // Loading Screen
        setTimeout(function() {
                document.querySelector('.loading-screen').style.opacity = '0';
                setTimeout(function() {
                        document.querySelector('.loading-screen').style.display = 'none';
                }, 500);
        }, 2500);
        
        // Header Scroll Effect
        window.addEventListener('scroll', function() {
                const header = document.querySelector('.header');
                if (window.scrollY > 50) {
                        header.classList.add('scrolled');
                } else {
                        header.classList.remove('scrolled');
                }
        });
        
        // Mobile Menu Toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navbar = document.querySelector('.navbar');
        
        menuToggle.addEventListener('click', function() {
                navbar.classList.toggle('active');
                menuToggle.querySelector('i').classList.toggle('fa-times');
        });
        
        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                        e.preventDefault();
                        
                        navbar.classList.remove('active');
                        menuToggle.querySelector('i').classList.remove('fa-times');
                        
                        const targetId = this.getAttribute('href');
                        const targetElement = document.querySelector(targetId);
                        
                        window.scrollTo({
                                top: targetElement.offsetTop - 80,
                                behavior: 'smooth'
                        });
                });
        });
        
        // Typing Animation
        const typed = new Typed('.typing', {
                strings: ['Developer', 'Programmer', 'YouTuber', 'Blogger', 'Freelancer'],
                typeSpeed: 100,
                backSpeed: 60,
                loop: true
        });
        
        // Skills Progress Animation
        const progressBars = document.querySelectorAll('.progress-fill');
        
        function animateProgressBars() {
                progressBars.forEach(bar => {
                        const value = bar.parentElement.getAttribute('data-value');
                        bar.style.width = value + '%';
                });
        }
        
        // Animate when skills section is in view
        const skillsSection = document.querySelector('.skills');
        const options = {
                threshold: 0.5
        };
        
        const observer = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                        if (entry.isIntersecting) {
                                animateProgressBars();
                                observer.unobserve(entry.target);
                        }
                });
        }, options);
        
        observer.observe(skillsSection);
        
        // Portfolio Filter
        const filterButtons = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                        // Remove active class from all buttons
                        filterButtons.forEach(btn => btn.classList.remove('active'));
                        
                        // Add active class to clicked button
                        this.classList.add('active');
                        
                        const filterValue = this.getAttribute('data-filter');
                        
                        portfolioItems.forEach(item => {
                                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                                        item.style.display = 'block';
                                } else {
                                        item.style.display = 'none';
                                }
                        });
                });
        });
        
        // Form Submission to Telegram
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const formData = new FormData(this);
                const name = formData.get('name');
                const email = formData.get('email');
                const subject = formData.get('subject');
                const message = formData.get('message');
                
                const telegramMessage = `
            New Contact Form Submission:
            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}
        `;
                
                // In a real implementation, you would send this to your Telegram bot API
                // This is just a simulation
                console.log('Message would be sent to Telegram:', telegramMessage);
                
                // Show success message
                alert('Your message has been sent successfully!');
                this.reset();
        });
        
        // Current Year in Footer
        document.getElementById('year').textContent = new Date().getFullYear();
        
        // GSAP Animations
        gsap.from('.hero-title, .type-animation, .hero-description', {
                duration: 1,
                y: 50,
                opacity: 0,
                stagger: 0.2,
                delay: 0.5
        });
        
        gsap.from('.hero-buttons', {
                duration: 1,
                y: 50,
                opacity: 0,
                delay: 1
        });
        
        gsap.from('.profile-img', {
                duration: 1,
                scale: 0.8,
                opacity: 0,
                delay: 0.5
        });
        
        gsap.from('.blue-border-animation', {
                duration: 1,
                scale: 0.5,
                opacity: 0,
                stagger: 0.2,
                delay: 0.7
        });
        
        gsap.from('.tech-icons .icon-circle', {
                duration: 1,
                y: 50,
                opacity: 0,
                stagger: 0.1,
                delay: 1.2
        });
        
        // Animate sections when they come into view
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
                gsap.from(section, {
                        scrollTrigger: {
                                trigger: section,
                                start: 'top 80%',
                                toggleActions: 'play none none none'
                        },
                        y: 50,
                        opacity: 0,
                        duration: 1
                });
        });
        
        // Floating contact button animation
        gsap.to('.contact-circle', {
                y: -10,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
        });
});