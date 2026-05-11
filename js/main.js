const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark-mode'){
    body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
    } else {
        localStorage.removeItem('theme');
    }
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('backToTop');

    if (navbar) {
       if (window.scrollY > 50) {
        navbar.classList.add('navbar-shrink', 'shadow-sm');
       } else {
        navbar.classList.remove('navbar-shrink', 'shadow-sm')
       }
    }

    if(backToTop) {
      if (window.scrollY > 300) {
        backToTop.classList.remove('d-none');
      } else {
        backToTop.classList.remove('d-none');
      }
    }
});

const startCounters = (entry) => {
    const counter = entry.target;
    const target = +counter.getAttribute('data-target');
    const duration = 2000;
    const step = target / (duration / 50);

    let current = 0;
    const update = () => {
        current += step;
        if (current < target) {
            counter.innerText = Math.ceil(current);
            setTimeout(update, 50);
        } else {
            counter.innerText = target;
        }
    };
    update();
};

const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver ((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('counter')) {
                startCounters(entry);
                observer.unobserve(entry.target);
            }
            else if (entry.target.classList.contains('fade-in-section')) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.counter, .fade-in-section'). forEach(el => {
    observer.observe(el);
});

const fadeObserver = new IntersectionObserver ((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
});

document.querySelectorAll('.fade-in-section').forEach(section => {
    fadeObserver.observe(section);
});
