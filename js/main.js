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
