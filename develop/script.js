// Defining variables
var ConfirmUpperCase;
var ConfirmLowerCase;
var ConfirmNumbers;
var ConfirmSpecialCharacters;

let upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "?", ">", "<", "/"];
let numbers = ["1","2", "3", "4", "5", "6", "7", "8", "9", "0"];

generatePassword = function() {
    generatePopup = parseInt(prompt('How long would you like your password to be? Enter a value between 8 and 128.'));
    while (!generatePopup || generatePopup < 8 || generatePopup > 128) {
        alert('Please enter a number between 8 and 128');
        generatePopup = parseInt(prompt('How long would you like your passowrd to be? Enter a value between 8 and 128.'));
    }
    if (generatePopup) {
        ConfirmUpperCase = confirm('Do you want to include uppercase letters?');
        ConfirmLowerCase = confirm('Do you want to include lowercase letters?');
        ConfirmNumbers = confirm('Do you want to include numbers?');
        ConfirmSpecialCharacters = confirm('Do you want to include special characters?');
    }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
