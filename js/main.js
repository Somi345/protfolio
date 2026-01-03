/* TYPING EFFECT */
const roles = [
  "Web Developer",
  "Problem Solver",
  "AI & Data Science Student"
];

let i = 0, j = 0, del = false;
const typing = document.querySelector(".typing");

function typeEffect(){
  let text = roles[i];
  typing.textContent = del
    ? text.slice(0, --j)
    : text.slice(0, ++j);

  if(!del && j === text.length + 1){
    del = true;
    setTimeout(typeEffect, 800);
    return;
  }

  if(del && j === 0){
    del = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, 120);
}

typeEffect();

/* SCROLL REVEAL */
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});
 const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(sec => {
    if(window.scrollY >= sec.offsetTop - 200){
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.style.color = "#b6b8ff";
    if(link.getAttribute("href") === "#" + current){
      link.style.color = "#22d3ee";
    }
  });
});
/* NAVBAR SHADOW ON SCROLL */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
/* =========================
   PROFESSIONAL INTERACTION FX
========================= */

/* Magnetic hover effect for boxes */
document.querySelectorAll(".box").forEach(box=>{
  box.addEventListener("mousemove",e=>{
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;

    box.style.transform =
      `translateX(12px) translate(${x*0.02}px, ${y*0.02}px)`;
  });

  box.addEventListener("mouseleave",()=>{
    box.style.transform = "translateX(12px)";
  });
});





/* REVEAL BOXES ON SCROLL */
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
},{threshold:0.2});

reveals.forEach(el=>{
  el.style.opacity = 0;
  el.style.transform = "translateY(40px)";
  observer.observe(el);
});

/* CURSOR GLOW MOVE */
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top  = e.clientY + "px";
});

/* SCROLL PROGRESS */
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById("scroll-progress").style.width = progress + "%";
});

/* =========================
   3D TILT INTERACTION
========================= */

document.querySelectorAll(".box").forEach(card => {

  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 12;
    const rotateY = (x - centerX) / 12;

    card.style.transform =
      `perspective(900px)
       rotateX(${rotateX}deg)
       rotateY(${rotateY}deg)
       translateY(-6px)`;

    card.style.boxShadow =
      `0 25px 50px rgba(0,0,0,0.4)`;

    /* Light position */
    card.style.setProperty("--x", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--y", `${(y / rect.height) * 100}%`);
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
    card.style.boxShadow =
      "0 15px 30px rgba(0,0,0,0.25)";
  });

});
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* Close menu after clicking link */
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
