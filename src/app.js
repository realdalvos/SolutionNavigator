console.log("Welcome to Solution Navigator")
button.addEventListener("click", newsletterSubscribe);

function newsletterSubscribe(){
}

const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')

function toggleButton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)