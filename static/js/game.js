function rotateCards() {
    document.querySelector("#left").style.transform = "rotate(90deg)";
    document.querySelector("#right").style.transform = "rotate(270deg)";
    document.querySelector("#top").style.transform = "rotate(180deg)";
}

rotateCards()