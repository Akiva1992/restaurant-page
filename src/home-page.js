import { createDiv, createH1, createPara, createSpan, createImg, createBtn } from "./createElements.js";


const createHomePage = (heroImgSrc)=>{
    const contentDiv = document.querySelector("#content");
    contentDiv.classList="home-page";

    let homeContent = createDiv();
    homeContent.classList.add("home-page-content");

    let leftHero = createDiv();
    leftHero.classList.add("left-hero");

    let rightHero = createDiv();
    rightHero.classList.add("right-hero");


    let h1 = createH1();
    h1.classList.add("welcome-txt");
    h1.innerText = "Welcome to Simply Food"

    let p = createPara();
    p.classList.add("hero-txt");
    p.innerText = "In our restaurant you will discover how simple food can become a true  del·i·ca·cy.";

    let img = createImg();
    img.src = heroImgSrc;
    img.classList.add("hero-img")


    let btn = createBtn();
    btn.classList.add("hero-menu-btn","btn");
    btn.innerText="Our Menu";


    leftHero.append(h1,p,btn);
    rightHero.append(img);

    homeContent.append(leftHero, rightHero)
    return homeContent
};

export {createHomePage}