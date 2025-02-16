'use strict';

const landing = document.querySelector('#landing');
const stickyNav = document.querySelector('#stickyNav'); 
const textHomePage = document.querySelector('#text-homepage');
const imgHomePage = document.querySelector('#img-homepage');
const sections = document.querySelectorAll('.section');

//Sticky Nav
const navHeight = stickyNav.getBoundingClientRect().height;

const obsCallBackNav = function(entries){
    const [entry] = entries;
    if(!entry.isIntersecting) stickyNav.classList.add('sticky');
    else stickyNav.classList.remove('sticky');
}

const obsOptionNav = {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
}

const observerNav = new IntersectionObserver(obsCallBackNav,obsOptionNav);
observerNav.observe(landing);

//homePage
const obsCallBackHome = function(entries){
    const [entry] = entries;
    if(entry.isIntersecting){
        textHomePage.classList.remove('homePage-transition');
        imgHomePage.classList.remove('homePage-transition');
    }
}

const obsOptionHome = {
    root: null,
    threshold: 0
}

const observerHomePage = new IntersectionObserver(obsCallBackHome,obsOptionHome);
observerHomePage.observe(landing);

//reveal section
const obsCallBackSec = function(entries,observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.remove('section-transition');
        observer.unobserve(entry.target);
    });
}

const obsOptionSec = {
    root: null,
    threshold: 0.15
}

const observerSec = new IntersectionObserver(obsCallBackSec,obsOptionSec);
sections.forEach(section => {
    observerSec.observe(section);
    section.classList.add('section--transition');
});







