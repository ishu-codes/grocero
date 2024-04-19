"use strict";

function setToggleMenu() {
    const menuIcon = document.querySelector("#menu-icon");
    const imgIcon = document.querySelector("#menu-icon img");
    const navSection = document.querySelector("#nav-section");

    menuIcon.addEventListener("click", () => {
        let imgPath = imgIcon.getAttribute("src");
        let isActive = imgPath.includes("close");
        imgPath = isActive
            ? imgPath.replace("close", "menu")
            : imgPath.replace("menu", "close");
        imgIcon.setAttribute("src", imgPath);

        let navDisplay = isActive ? "none" : "block";
        navSection.setAttribute("style", `display:${navDisplay}`);
    });
}

// window.document.onload(() => {
setToggleMenu();
// });
