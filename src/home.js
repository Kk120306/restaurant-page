import landingImage from "./assets/landing.jpg"; 

export default function loadHome() {
    const content = document.getElementById("content");
    content.innerHTML = ""; 


    const homeContainer = document.createElement("div");
    homeContainer.id = "home-container";
    content.appendChild(homeContainer);


    const leftContainer = document.createElement("div");
    leftContainer.id = "left-container";
    homeContainer.appendChild(leftContainer);


    const restName = document.createElement("div");
    restName.classList.add("restaurant-name"); 
    restName.innerText = "Sato";
    leftContainer.appendChild(restName);


    const restDesc = document.createElement("div");
    restDesc.classList.add("restaurant-desc"); 
    restDesc.innerText =
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";
    leftContainer.appendChild(restDesc);

    const homeImage = document.createElement("img"); 
    homeImage.src = landingImage; 
    homeImage.alt = "landing-image"
    homeImage.id = "home-image"

    homeContainer.appendChild(homeImage);
}

