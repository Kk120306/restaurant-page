import loadHome from "./home";
// import loadAbout from "./about";
// import loadMenu from "./menu";
import "./styles.css";

const navHomeButton = document.querySelector('.home');
navHomeButton.addEventListener("click", loadHome());

// const navAboutButton = document.querySelector('.menu');
// navHomeButton.addEventListener("click", loadAbout());

// const navMenuButton = document.querySelector('.about');
// navHomeButton.addEventListener("click", loadMenu());

loadHome();