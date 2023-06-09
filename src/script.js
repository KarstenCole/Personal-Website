function toggleMenu() {
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
    const body = document.body;
    menuButton.classList.toggle('active');
    menu.classList.toggle('show');
    body.classList.toggle('show-scrollbar');
}