export default function loadAbout() {
    const display = document.getElementById("content");
    display.innerHTML = ""; 

    const aboutContent = document.createElement("div");
    aboutContent.classList.add("about-content");

    const text = document.createTextNode("Made by ");
    const github = document.createElement("a");
    github.href = "https://github.com/Kk120306";
    github.innerText = "Kk120306";


    aboutContent.appendChild(text);
    aboutContent.appendChild(github);

    display.appendChild(aboutContent);
}
