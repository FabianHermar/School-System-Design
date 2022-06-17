const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggle");


//show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});


//close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

    //Guardar modo en localstorage.

    if (document.body.classList.contains('dark-theme-variables')) {
        localStorage.setItem('dark-mode', 'true');
    } else {
        localStorage.setItem('dark-mode', 'false');
    }
});

//Obetener el modo actual
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(2)').classList.add('active');
    themeToggler.querySelector('span:nth-child(1)').classList.remove('active');


} else {
    document.body.classList.remove('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.add('active');
    themeToggler.querySelector('span:nth-child(2)').classList.remove('active');

    
}