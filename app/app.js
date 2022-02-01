const menuBtn = document.querySelector('.menu-container');
const sidebarOverlay = document.querySelector('.sidebar-bg-overlay');
const sidebar = document.querySelector('.sidebar-container');

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