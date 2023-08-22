const mobileMenu=document.querySelector(".mobile-menu");
const navMobile=document.querySelector(".nav__mobile-menu");
const menuItems=document.querySelectorAll(".nav__mobile-menu li");

mobileMenu.addEventListener("click", toggleMenu);

navMobile.querySelector("span i").addEventListener("click",toggleMenu);

function toggleMenu() {
    navMobile.classList.toggle("close-menu");  
}

menuItems.forEach(function(item){
    item.addEventListener("click",toggleMenu);
});

const sections=document.querySelectorAll("section");
const navLink=document.querySelectorAll(".nav__menu li.nav__desktop-menu");
const navMobileLink=document.querySelectorAll(".nav__mobile-menu ul li");
window.onscroll=()=>{
    sections.forEach(function(section){
        let top=window.scrollY;
        let offset=section.offsetTop-250;
        let height=section.offsetHeight;
        let id=section.getAttribute('id');
        if(top>offset && top<offset+height){
            navLink.forEach((link)=>{
                link.classList.remove("active");
                document.querySelector(".nav__menu li a[href*="+id+"]").parentElement.classList.add("active");
            });
            navMobileLink.forEach((link)=>{
                link.classList.remove("active");
                document.querySelector(".nav__mobile-menu li a[href*="+id+"]").parentElement.classList.add("active");
            });
        }
    });
}
