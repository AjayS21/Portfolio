burger = document.querySelector('.burger')
Navbar = document.querySelector('.Navbar')
navbar_list = document.querySelector('.navbar_list')
rightnav = document.querySelector('.rightnav')

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('v-clas-resp');
    navbar_list.classList.toggle('v-class-resp');
    Navbar.classList.toggle('h-nav-resp');
})