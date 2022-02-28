const 
    burger_btn = document.querySelector(".hamburger__btn"),
    burger_btn_close = document.querySelector(".hamburger__btn_close"),
    menu = document.querySelector('.menu'),
    overflow = document.querySelector('.body');

burger_btn.addEventListener('click', ()=> {

    if(menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        menu.classList.add("visible");
        overflow.classList.add("overflow");
    }

});
burger_btn_close.addEventListener('click', ()=> {
    menu.classList.remove("visible");
    menu.classList.add("hidden");
    overflow.classList.remove("overflow");

})