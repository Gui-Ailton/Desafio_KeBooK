var menu = document.querySelector('.menu-mobile a.icon-menu')

menu.addEventListener('click',()=>{
    
    let menuMobile = document.querySelector('.menu-mobile ul');
    if(menuMobile.classList.contains('op')){
        menuMobile.classList.remove('op');
    }
    else{
        menuMobile.classList.add('op')
    }
    
})