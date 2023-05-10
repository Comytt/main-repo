const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    nav.style.width = '300px';
  });
  
  link.addEventListener('mouseout', () => {
    nav.style.width = '200px';
  });
});