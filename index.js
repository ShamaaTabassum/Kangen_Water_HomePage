const toggleBtn=document.querySelector('.menu-toggle-btn');
const header=document.querySelector('.header');
const menuItems1=document.querySelector('.menu-items1');
const toggleMenu=()=>{
    header.classList.toggle("active1");
 menuItems1.classList.toggle("active");
}
toggleBtn.addEventListener("click",()=>toggleMenu())

const downArrowShop=document.querySelector(".down-arrow-shop");
const shop=document.querySelector(".menu-items");
const toggleShopArrow=()=>{
    shop.classList.toggle("subactive")
}
downArrowShop.addEventListener("click",()=>toggleShopArrow());
const downArrowContact=document.querySelector(".down-arrow-contact");
const contact=document.querySelector(".menu-items");
const toggleContactArrow=()=>{
    shop.classList.toggle("subactive1")
}
downArrowContact.addEventListener("click",()=>toggleContactArrow());

const sec6=document.querySelector(".bottom-sec6");
const playIcon=document.querySelector(".play-btn");
const playBtn=()=>{
    sec6.classList.add("play");
}
playIcon.addEventListener("click",()=>playBtn());