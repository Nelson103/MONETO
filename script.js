// grab the hamburger element
let hambElem = document.getElementById("hamburger");
// adding a click event listener to hamburger menu
hambElem.addEventListener("click", toogleMenu);


function toogleMenu() {
    let mobileMenuElem = document.getElementById ("mob-menu");
    mobileMenuElem.classList.toggle("show-menu");
    mobileMenuElem.style.backgroundColor = "skyblue";
}
// grab the display button
let dispBtn = document.getElementById("display-btn")
dispBtn.addEventListener("click", showLogin);

function showLogin() {
    
}