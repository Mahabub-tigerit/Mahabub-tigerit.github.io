const myImage = document.getElementById("logo");
let isChromeImage = (myImage === "images/chrome.png");

// Altering image clicking on logo image
myImage.onclick = () => {
    if(isChromeImage) {
        myImage.setAttribute("src", "images/chrome.png");
    }
    else {
        myImage.setAttribute("src", "images/firefox.jpeg");
    }
    isChromeImage = !isChromeImage;
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName(){
    const myName = prompt("Please enter your name.");
    // Check if the name is null or not
    if(!myName) {
        setUserName();
    }
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Hey, ${myName}`;
    }
}
// Check if the name already exist or not
if(!localStorage.getItem("name")) {
    setUserName();
} else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hey, ${storedName}`;
}
myButton.onclick = () => {
    setUserName();
};
