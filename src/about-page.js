import { createDiv, createH1, createPara, createSpan, createImg, createBtn } from "./createElements.js";


const createAboutPage = ()=>{

    const contentDiv = document.querySelector("#content");
    contentDiv.classList="about-page";

    let aboutPageContent = createDiv();
    aboutPageContent.classList.add("about-page-content");

    const aboutHeader = createH1();
    aboutHeader.classList.add("about-header");
    aboutHeader.innerText = "ABOUT";

    const aboutPara = createPara();
    aboutPara.classList.add("about-para");
    aboutPara.innerText="Simply Food is an enchanting culinary haven, a gastronomic paradise crafted to satiate the most discerning palates. Nestled in the heart of a bustling city, this imaginary restaurant unveils a symphony of flavors that celebrate the essence of simplicity. Each dish is a masterpiece, meticulously prepared by master chefs who skillfully combine fresh, locally sourced ingredients with exquisite techniques. With an ambience that exudes elegance and warmth, Simply Food creates an inviting atmosphere for unforgettable dining experiences. Whether savoring a succulent steak, indulging in a delicate seafood creation, or relishing a divine vegetarian delight, guests are transported on a sensational journey of taste and texture. At Simply Food, culinary artistry meets pure bliss, leaving patrons craving more with every unforgettable visit."

    aboutPageContent.append(aboutHeader, aboutPara);
    return aboutPageContent

};

export { createAboutPage }