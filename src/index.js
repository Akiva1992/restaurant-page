import { appendContent } from "./appendContent.js";
import { createHomePage} from "./home-page.js";
import { createMenuPage} from "./menu-page.js";
import './style.css';
import heroImg from "./imgs/welcome-img.jpg";
import poloImg from "./imgs/polo-img.jpg";
import buckwheatImg from "./imgs/buckwheat-img.jpg";
import breadImg from "./imgs/bread-img.jpg";
import oatsImg from "./imgs/oats-img.jpg";



const pageSetup = (()=>{
    

    // Dom Elements.
    const contentDiv = document.querySelector("#content");
    const logoBtn = document.querySelector(".logo");
    const homeBtn = document.querySelector(".home");
    const menuBtn = document.querySelector(".menu");
    const aboutBtn = document.querySelector(".about");
    let heroMenuBtn;
    
    const init = ()=>{
        navigateHome();
    };
    
    const bindEvents = ()=>{
        logoBtn.addEventListener("click", navigateHome);
        homeBtn.addEventListener("click", navigateHome);
        menuBtn.addEventListener("click", navigateToMenu);
        heroMenuBtn.addEventListener("click", navigateToMenu)
    };

    const navigateHome = (e)=>{
        contentDiv.textContent= "";
        appendContent(createHomePage(heroImg));
        heroMenuBtn = document.querySelector(".hero-menu-btn");
        bindEvents();
    };
    
    const navigateToMenu = (e)=>{
        contentDiv.textContent= "";
        appendContent(createMenuPage(poloImg, buckwheatImg, breadImg,oatsImg));
        bindEvents();
        console.log("Hello")
    };
    
    init();

    return{
        navigateHome
    }
})();

export {  }