const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
if (menu && links) menu.addEventListener('click', () => links.classList.toggle('open'));

const reveal = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.card,.service,.tile,.split > *').forEach(el => reveal.observe(el));
