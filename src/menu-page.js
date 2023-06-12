import { createDiv, createH1, createPara, createSpan, createImg, createBtn } from "./createElements.js";

const createMenuPage = (poloImgSrc, buckwheatImgSrc, breadImgSrc, oatsImgSrc)=>{
    const contentDiv = document.querySelector("#content");
    contentDiv.classList="menu-page";

    let menuPageContent = createDiv();
    menuPageContent.classList.add("menu-page-content");

    // ---------------Polo-Card-----------------------//
    const poloCard = createDiv();
    poloCard.classList.add("polo","card");

    const leftPoloCard = createDiv();
    leftPoloCard.classList.add("card-left-side");

    const rightPoloCard = createDiv();
    rightPoloCard.classList.add("card-right-side");


    const poloHeader = createH1();
    poloHeader.classList.add("card-header");
    poloHeader.innerText = "Adas Polo"

    const poloPara = createPara();
    poloPara.classList.add("card-para");
    poloPara.innerText = `Rice | Lentils | Caraway seeds | Salt | 
    Served with the traditional crunchy tahdig.`;

    
    const poloImg = createImg();
    poloImg.src = poloImgSrc;
    poloImg.classList.add("card-img");
    
    leftPoloCard.append(poloHeader,poloPara);
    rightPoloCard.append(poloImg);

    // -----------------Buckwheat Card-----------------------//
    const buckwheatCard = createDiv();
    buckwheatCard.classList.add("buckwheat","card");

    const leftBuckwheatCard = createDiv();
    leftBuckwheatCard.classList.add("card-left-side");

    const rightBuckwheatCard = createDiv();
    rightBuckwheatCard.classList.add("card-right-side");


    const buckwheatHeader = createH1();
    buckwheatHeader.classList.add("card-header");
    buckwheatHeader.innerText = "Buckwheat & Tahini"

    const buckwheatPara = createPara();
    buckwheatPara.classList.add("card-para");
    buckwheatPara.innerText = `Buckwheat rice cakes | Tahini | Tomatoes | Carrots |
    Served as simple and light lunch.`;

    const buckwheatImg = createImg();
    buckwheatImg.src = buckwheatImgSrc;
    buckwheatImg.classList.add("card-img");

    leftBuckwheatCard.append(buckwheatHeader,buckwheatPara);
    rightBuckwheatCard.append(buckwheatImg);

    //-------------------Bread Card----------------------------//
    const breadCard = createDiv();
    breadCard.classList.add("bread","card");

    const leftBreadCard = createDiv();
    leftBreadCard.classList.add("card-left-side");

    const rightBreadCard = createDiv();
    rightBreadCard.classList.add("card-right-side");


    const breadHeader = createH1();
    breadHeader.classList.add("card-header");
    breadHeader.innerText = "Oats Breakfast"

    const breadPara = createPara();
    breadPara.classList.add("card-para");
    breadPara.innerText = `Fresh sourdough bread served plain as it is`;

    const breadImg = createImg();
    breadImg.src = breadImgSrc;
    breadImg.classList.add("card-img");

    leftBreadCard.append(breadHeader,breadPara);
    rightBreadCard.append(breadImg);

    //-------------------------Oats Card----------------------------//
    const oatsCard = createDiv();
    oatsCard.classList.add("oats","card");

    const leftOatsCard = createDiv();
    leftOatsCard.classList.add("card-left-side");

    const rightOatsCard = createDiv();
    rightOatsCard.classList.add("card-right-side");


    const oatsHeader = createH1();
    oatsHeader.classList.add("card-header");
    oatsHeader.innerText = "Sourdough oats"

    const oatsPara = createPara();
    oatsPara.classList.add("card-para");
    oatsPara.innerText = `Oats | Fruits | Nuts | Apple | Apple Sauce |
    Served as breakfast or a late dinner.`;

    const oatsImg = createImg();
    oatsImg.src = oatsImgSrc;
    oatsImg.classList.add("card-img");

    leftOatsCard.append(oatsHeader,oatsPara);
    rightOatsCard.append(oatsImg);

    //-----------//

    poloCard.append(leftPoloCard,rightPoloCard);
    buckwheatCard.append(leftBuckwheatCard,rightBuckwheatCard);
    breadCard.append(leftBreadCard,rightBreadCard);
    oatsCard.append(leftOatsCard,rightOatsCard);

    menuPageContent.append(poloCard, buckwheatCard, breadCard, oatsCard)
    return menuPageContent

};

export { createMenuPage }