// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

const text=document.querySelector('.sed-text');
const textLoad  =()=>{
    setTimeout(() => {
     text.textContent="Sri Laxmi Balaji borewells";  
    }, 0);
    setTimeout(() => {
        text.textContent="Ground water testing";  
       }, 2000);
       setTimeout(() => {
        text.textContent="Contact us";  
       }, 4000);
       setTimeout(() => {
        text.textContent="9849984176";  
       }, 6000);
       setTimeout(() => {
        text.textContent="8341416101";  
       }, 8000);
}
textLoad();
setInterval(textLoad,10000);
// menuToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });

function toggleMenu() {
    const nav = document.getElementById('navLinks');
    nav.classList.toggle('active');
  }
const carouselContainer = document.querySelector('.carousel-container');
const images = document.querySelectorAll('.carousel-container img');
let index = 0;

function slideCarousel() {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    carouselContainer.style.transform = `translateX(${-index * 100}%)`;
}

// Auto-slide every 3 seconds
setInterval(slideCarousel, 3000);

//mobile view for button 
// ...existing code...

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// ...existing code...
// Dropdown Toggle Logic
const dropdownButtons = document.querySelectorAll('.dropdown-btn');

dropdownButtons.forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

 function get(){
    window.location.href = 'https://wa.me/7659930658';
    //alert('Thank you for your interest! Contact this number 9849984176');
 }
function getQuote() {
    window.location.href = 'https://wa.me/7659930658';
    
   // alert('Thank you for your interest! Contact this number 9849984176');
}
const video = document.getElementById('videoPlayer');

// Example: Log video events
video.addEventListener('play', () => {
    console.log('Video is playing');
});

video.addEventListener('pause', () => {
    console.log('Video is paused');
});

