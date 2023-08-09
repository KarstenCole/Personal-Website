function toggleMenu() {
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
    const body = document.body;
    menuButton.classList.toggle('active');
    menu.classList.toggle('show');
    body.classList.toggle('show-scrollbar');
}

document.addEventListener('DOMContentLoaded', function() {
    var wrapper = document.querySelector('.wrapper');
    wrapper.addEventListener('wheel', function(event) {
      var scrollTop = wrapper.scrollTop;
      var scrollHeight = wrapper.scrollHeight;
      var height = wrapper.clientHeight;
      var delta = (event.deltaY > 0) ? 1 : -1;
      if ((delta < 0 && scrollTop <= 0) || (delta > 0 && scrollTop + height >= scrollHeight)) {
        event.preventDefault();
      }
    });
});
  