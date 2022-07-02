
let searchBtn = document.querySelector("#searchIcon");
let searchBox = document.querySelector("#searchBox");

searchBtn.onclick = () =>{
    searchBox.classList.toggle("active");
    navBar.classList.remove("active");
    menuBtn.classList.remove("fa-times");
}

let menuBtn = document.querySelector("#menuIcon");
let navBar = document.querySelector(".navbar");

menuBtn.onclick = () =>{
    menuBtn.classList.toggle("fa-times");
    navBar.classList.toggle("active");
    searchBox.classList.remove("active");
}

var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
 });

 var swiper = new Swiper(".item-slider", {
    
    loop:true,
    centeredSlides:true,
    spaceBetween: 20,
    pagination: {
       el: ".swiper-pagination",
       clickable: true,
    },
    breakpoints: {
       0: {
         slidesPerView: 1,
       },
       700: {
         slidesPerView: 2,
       },
       1000: {
         slidesPerView: 3,
       },
    },
 });

let itemPreview = document.querySelector(".item-prev-container");
let itemBox = document.querySelectorAll(".item-preview");

document.querySelectorAll(".item .slide").forEach(item => {
   item.onclick = () =>{
      itemPreview.style.display = 'flex';
      let name = item.getAttribute("data-name");

      itemBox.forEach(preview => {
         let target = preview.getAttribute("data-target");
         if(name==target){
            preview.classList.add("active");
         };
      });
   };
});

itemPreview.querySelector('#close-preview').onclick = () =>{
   itemPreview.style.display = 'none';
   itemBox.forEach(close =>{
      close.classList.remove('active');
   });
};
 