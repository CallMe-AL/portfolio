const menuBtn = document.querySelector('.menu-container');
const sidebarOverlay = document.querySelector('.sidebar-bg-overlay');
const sidebar = document.querySelector('.sidebar-container');
const scrollBtn = document.querySelector('.scroll-btn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

menuBtn.addEventListener('click', () => {
  if (!menuBtn.classList.contains('close')) {
    menuBtn.classList.add('close');
    menuBtn.ariaLabel = 'close menu';
    sidebarOverlay.classList.add('active');
    sidebar.classList.add('active');
  } else {
    menuBtn.classList.remove('close');
    menuBtn.ariaLabel = 'open menu';
    sidebarOverlay.classList.remove('active');
    sidebar.classList.remove('active');
  }
})