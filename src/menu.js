import foodImage from "./assets/food.jpg"

export default function loadMenu() {
    const content = document.getElementById("content");
    content.innerHTML = ""; 


    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");


    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    menuTitle.innerText = "MENU";
    menuContainer.appendChild(menuTitle);


    const menuItems = document.createElement("div");
    menuItems.classList.add("menu-items");
    menuContainer.appendChild(menuItems);


    const cardData = [
        {
            imgSrc: foodImage,
            imgAlt: "sushi",
            title: "Sushi",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            imgSrc: foodImage,
            imgAlt: "sushi",
            title: "Sushi",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            imgSrc: foodImage,
            imgAlt: "sushi",
            title: "Sushi",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            imgSrc: foodImage,
            imgAlt: "sushi",
            title: "Sushi",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            imgSrc: foodImage,
            imgAlt: "sushi",
            title: "Sushi",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
        {
            imgSrc: foodImage,
            imgAlt: "sushi",
            title: "Sushi",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        },
    ];

    cardData.forEach((card) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");

        const img = document.createElement("img");
        img.src = card.imgSrc;
        img.alt = card.imgAlt;
        img.id = "food-img";
        cardElement.appendChild(img);

        const foodTitle = document.createElement("div");
        foodTitle.classList.add("food-title");
        foodTitle.innerText = card.title;
        cardElement.appendChild(foodTitle);

        const foodDesc = document.createElement("div");
        foodDesc.classList.add("food-desc");
        foodDesc.innerText = card.desc;
        cardElement.appendChild(foodDesc);

        menuItems.appendChild(cardElement);
    });


    content.appendChild(menuContainer);
}
