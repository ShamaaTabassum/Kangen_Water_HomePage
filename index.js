const shopDownArrow=document.querySelector('.shop');
const submenuListShop=document.querySelector('.submenu-list-shop');
const contactDownArrow=document.querySelector('.contact');
const submenuListContact=document.querySelector('.submenu-list-contact');

const toggleDropArrow1=()=>{
    submenuListShop.classList.add('submenu-active');
}
shopDownArrow.addEventListener("mouseover",()=>toggleDropArrow1());
const toggleDropArrow2=()=>{
    submenuListShop.classList.remove('submenu-active');
}
shopDownArrow.addEventListener("mouseout",()=>toggleDropArrow2());
const toggleDropArrow3=()=>{
    submenuListContact.classList.add('submenu-active');
}
contactDownArrow.addEventListener("mouseover",()=>toggleDropArrow3());

const toggleDropArrow4=()=>{
    submenuListContact.classList.remove('submenu-active');
}
contactDownArrow.addEventListener("mouseout",()=>toggleDropArrow4());