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
    window.prompt = parseInt(prompt('How long would you like your password to be? Enter a value between 8 and 128.'));
    while (!window.prompt || window.prompt < 8 || window.prompt > 128) {
        alert('Please enter a number between 8 and 128');
        window.prompt = parseInt(prompt('How long would you like your passowrd to be? Enter a value between 8 and 128.'));
    }
    if (window.confirm) {
        ConfirmUpperCase = confirm('Do you want to include uppercase letters?');
        ConfirmLowerCase = confirm('Do you want to include lowercase letters?');
        ConfirmNumbers = confirm('Do you want to include numbers?');
        ConfirmSpecialCharacters = confirm('Do you want to include special characters?');
    }
    if (!ConfirmUpperCase && !ConfirmLowerCase && !ConfirmNumbers && !ConfirmSpecialCharacters) {
       userSelection = window.alert('You must include at least one character type to create a password.') 
    }
    else if (ConfirmUpperCase && ConfirmLowerCase && ConfirmNumbers && ConfirmSpecialCharacters) {
        userSelection = upperCaseLetters.concat(lowerCaseLetters, specialCharacters, numbers);
    }
    else if (ConfirmUpperCase && ConfirmLowerCase && ConfirmNumbers) {
        userSelection = upperCaseLetters.concat(lowerCaseLetters,numbers);
    }
    else if (ConfirmUpperCase && ConfirmLowerCase && ConfirmSpecialCharacters) {
        userSelection = upperCaseLetters.concat(lowerCaseLetters, specialCharacters);
    }
    else if (ConfirmUpperCase && ConfirmNumbers && ConfirmSpecialCharacters) {
        userSelection = upperCaseLetters.concat(numbers, specialCharacters);
    }
    else if (ConfirmLowerCase && ConfirmNumbers && ConfirmSpecialCharacters) {
        userSelection = lowerCaseLetters.concat(numbers, specialCharacters);
    }
    else if (ConfirmUpperCase && ConfirmLowerCase) {
        userSelection = upperCaseLetters.concat(lowerCaseLetters);
    }
    else if (ConfirmUpperCase && ConfirmNumbers) {
        userSelection = upperCaseLetters.concat(numbers);
    }
    else if (ConfirmUpperCase && ConfirmSpecialCharacters) {
        userSelection = upperCaseLetters.concat(specialCharacters);
    }
    else if (ConfirmLowerCase && ConfirmNumbers) {
        userSelection = lowerCaseLetters.concat(numbers);
    }
    else if (ConfirmLowerCase && ConfirmSpecialCharacters) {
        userSelection = lowerCaseLetters.concat(specialCharacters);
    }
    else if (ConfirmNumbers && ConfirmSpecialCharacters) {
        userSelection = numbers.concat(specialCharacters);
    }
    else if (ConfirmUpperCase) {
        userSelection = upperCaseLetters;
    }
    else if (ConfirmLowerCase) {
        userSelection = lowerCaseLetters;
    }
    else if (ConfirmNumbers) {
        userSelection = numbers;
    }
    else if (ConfirmSpecialCharacters) {
        userSelection = specialCharacters;
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
