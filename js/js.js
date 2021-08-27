const color = document.getElementById("color_input");
const colorText = document.getElementById("color_text");
const mainSection = document.getElementById("main-section");

function colorChange(){
    mainSection.style.backgroundColor =  colorText.value = color.value;
}

function copyText(){
    colorText.focus();
    colorText.select();
    document.execCommand('copy');
}
