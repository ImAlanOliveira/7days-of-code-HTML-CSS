const btnMobile = document.getElementById('btnMobile');

function toggleMenu(event){
    if (event.type == 'touchstart') event.preventDefault;

    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

    console.log("botao funciona")
}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);