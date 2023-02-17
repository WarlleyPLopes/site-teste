const minhaImg = document.querySelector("img");

minhaImg.onclick = () => {
  const mySrc = minhaImg.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    minhaImg.setAttribute("src", "images/kurama.png");
  } else {
    minhaImg.setAttribute("src", "images/firefox-icon.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Por favor digite o seu nome.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla é legal, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "Mozilla é legal, " + storedName;
}

myButton.onclick = () => {
  setUserName();
};
