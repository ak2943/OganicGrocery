let searcForm=document.querySelector('.search-form');
document.querySelector('#btn-search').onclick=()=>
{
   searcForm.classList.toggle('active');
   ShopingCart.classList.remove('active');
   loginForm.classList.remove('active');
   navbar.classList.remove('active');
}

let ShopingCart=document.querySelector('.Shoping-cart');
document.querySelector('#btn-cart').onclick=()=>
{
   ShopingCart.classList.toggle('active');
   searcForm.classList.remove('active');
   loginForm.classList.remove('active');
   navbar.classList.remove('active');
}

let loginForm=document.querySelector('.login-form');
document.querySelector('#btn-login').onclick=()=>
{
   loginForm.classList.toggle('active');
   searcForm.classList.remove('active');
   ShopingCart.classList.remove('active');
   navbar.classList.remove('active');

}

let navbar=document.querySelector('.navbar');
document.querySelector('#btn-menu').onclick=()=>
{
   searcForm.classList.remove('active');
   ShopingCart.classList.remove('active');
   loginForm.classList.remove('active');
   navbar.classList.toggle('active');
}


window.onscroll=()=>{
   searcForm.classList.remove('active');
   ShopingCart.classList.remove('active');
   loginForm.classList.remove('active');
   navbar.classList.remove('active');
}


//cope code from swaper js/demo-select responsive breakpoint-copy js code and html links
var swiper = new Swiper(".product-slider", {
   loop:true,
   spaceBetween: 10,

   autoplay:{
      delay:3000,
      disableOnInteraction:false,
   },

   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1020: {
       slidesPerView: 3,
     },
   },
 });
//for reviews
 var swiper = new Swiper(".review-slider", {
   loop:true,
   spaceBetween: 10,

   autoplay:{
      delay:3000,
      disableOnInteraction:false,
   },

   breakpoints: {
     0: {
       slidesPerView: 1,
     },
     768: {
       slidesPerView: 2,
     },
     1020: {
       slidesPerView: 3,
     },
   },
 });
