const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordLengthInput = document.getElementById("pwd-length");

passwordLengthInput.addEventListener("input", () => {
    passwordLength = passwordLengthInput.value
});

let checkUppercase = document.getElementById("uppercase");


// function uncheckUppercase() {
//     if (checkBox.checked == false) {
         
//     }
// }




let password1 = document.getElementById("pwd1-el")
let password2 = document.getElementById("pwd2-el")

function generatePassword() {
    password1.textContent = ""
    password2.textContent = ""
    for (let i = 0; i < passwordLength; i++) {
         password1.textContent += characters[Math.floor(Math.random()*characters.length)]
    }
    for (let i = 0; i < passwordLength; i++) {
        password2.textContent += characters[Math.floor(Math.random()*characters.length)]
   }
}

function copyPassword(button) {
    navigator.clipboard.writeText(button.textContent);
    alert("Copied the text: " + button.textContent);
}
