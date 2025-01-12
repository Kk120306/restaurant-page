import loadHome from "./home";
import loadAbout from "./about";
import loadMenu from "./menu";
import "./styles.css";


const navHomeButton = document.querySelector('.home');
navHomeButton.addEventListener("click", loadHome); 

const navAboutButton = document.querySelector('.about');
navAboutButton.addEventListener("click", loadAbout); 

const navMenuButton = document.querySelector('.menu');
navMenuButton.addEventListener("click", loadMenu); 


loadHome();
