let mySelect = document.querySelector("select");
let myBold = document.querySelector(".bold");
let mySizeMinus = document.querySelector(".minus");
let mySizePlus = document.querySelector(".plus");
let myNumber = document.querySelector(".size input");
let myColor = document.querySelector(".color");
let myText = document.querySelector(".text");

mySelect.addEventListener("change", function() {
    myText.style.fontFamily = mySelect.value;
});
myBold.addEventListener("click", function() {
    if (myText.style.fontWeight !== "bold") {
        myText.style.fontWeight = "bold";
    } else {
        myText.style.fontWeight = "";
    }
});
mySizeMinus.addEventListener("click", function() {
    if (myNumber.value > 0) --myNumber.value;
    myText.style.fontSize = `${myNumber.value}px`;
});
mySizePlus.addEventListener("click", function() {
    if (myNumber.value < 32) ++myNumber.value;
    myText.style.fontSize = `${myNumber.value}px`;
});
myNumber.addEventListener("change", function() {
    if(myNumber.value < 0) {
        myNumber.value = 0;
    } else if (myNumber.value > 32) {
        myNumber.value = 32;
    }
    myText.style.fontSize = `${myNumber.value}px`;
})
myColor.addEventListener("click", function() {
    if (myText.style.color !== "white") {
        myText.style.color = "white";
        myText.style.backgroundColor = "black";
    } else {
        myText.style.color = "black";
        myText.style.backgroundColor = "white";
    }
});