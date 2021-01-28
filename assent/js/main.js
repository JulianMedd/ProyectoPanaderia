const navMenu = document.getElementById('nav-menu');
      openMenu = document.getElementById('nav-toggle');
      closeMenu = document.getElementById('nav-close');

openMenu.addEventListener('click', ()=>{
    navMenu.classList.add('show')
})

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener("click", linkAction))