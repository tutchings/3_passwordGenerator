// Assignment Code
var generateBtn = document.querySelector("#generate");

//==============================================================================================================================================
//global variable declarations
var lowerCaseLetters = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

var upperCaseLetters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

var numbers = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

var specialCharacters = [
  " ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"
];

var pwCharacterOptions = [];
var passwordLength = 0;

//========================================================================================================================================
//functions

//adds characters to characterOptionsArray based on user specified criteria
function addCriteria(currentOptionsArr, newOptionArr){
  currentOptionsArr = currentOptionsArr.concat(newOptionArr);
  return currentOptionsArr;
}

//creates password
function generatePassword(characterOptionsArr, length){
    var randomNumber;
    var password = [];

    //generates random number which will correspond to character in characterOptionsArr
    //adds randomly selected character to password array
    for (var i = 0; i < length; i++){
      randomNumber = Math.floor(Math.random() * characterOptionsArr.length);
      password[i] = characterOptionsArr[randomNumber];
    }

    //password.join removes commas from array
    //password.toString converts array to string
    password = password.join("");
    var passwordString = password.toString();

    return passwordString;
}


// Write password to the #password input
function writePassword() {

  //resets passwordCharacterOptions and password length each time generate password button is clicked
  pwCharacterOptions = [];
  passwordLength = 0;

  //asks user what character types to include in password
  var confirmLower = confirm("Include Lower Case Characters in Password?");
  var confirmUpper = confirm("Include Upper Case Characters in Password?");
  var confirmNumbers = confirm("Include Number Characters in Password?");
  var confirmSpecialCharacters = confirm("Include Special Characters in Password?");

  //asks user for length of password
  //length must be between 8 and 128 characters
  //continue to prompt user for length until valid integer between 8 and 128 characters is entered
  while (passwordLength < 8 || passwordLength > 128 || Number.isInteger(passwordLength) === false){
    passwordLength = parseInt(prompt("Enter length for password (must be between 8 and 128 characters)"));    
  }
  

  //adds characters to pwCharacterOptions array based on criteria determined by user
  if (confirmLower === true){
    pwCharacterOptions = addCriteria(pwCharacterOptions, lowerCaseLetters);
  }

  if (confirmUpper === true){
    pwCharacterOptions = addCriteria(pwCharacterOptions, upperCaseLetters);
  }

  if (confirmNumbers === true){
    pwCharacterOptions = addCriteria(pwCharacterOptions, numbers);
  }

  if (confirmSpecialCharacters === true){
    pwCharacterOptions = addCriteria(pwCharacterOptions, specialCharacters);
  }

  //generates password and writes to html
  var password = generatePassword(pwCharacterOptions, passwordLength);
  var passwordText = document.querySelector("#password");

  console.log(password);
  passwordText.value = password;
  

}

//==========================================================================================================================================
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
