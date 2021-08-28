const color = document.getElementById("color_input");
const colorText = document.getElementById("color_text");
const mainSection = document.getElementById("main-section");

function colorChange(){
    /* Change the color of the background and color code. */
    mainSection.style.backgroundColor =  colorText.value = color.value;
}

function copyText(){
    /* Copy the color to the clipboard. */
    colorText.focus();
    colorText.select();
    document.execCommand('copy');
}

function randomColor(){
    /* Generating Random Color. */
    var letters = "0123456789ABCDEF";
    var hex = "#";
    for(var i=0; i<6; ++i){
        hex += letters[Math.floor(Math.random() * 16)];
    }
    mainSection.style.backgroundColor =  colorText.value = color.value = hex;
}
