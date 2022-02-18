// Assignment Code
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var charactersArray = ["!", "@", "#", "$", "%", "^", "&", "*"];

var finalchoice = [];


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var length = prompt("How long do you want the password to be?");
  var uppercase = confirm("Would you like uppercase characters?");
  var lowercase = confirm("Would you like lowercase characters?");
  var numbers = confirm("Would you like numbers?");
  var characters = confirm("Would you like characters?");

  if (length < 6 || length > 128) {

    alert("length requirements not met")

    generatePassword()
  }

  if (!lowercase && !uppercase && !numbers && !characters) {

    alert("requirements not met")

    generatePassword()
  }
  var password = ""
  if (lowercase === true) {

    finalchoice = [...finalchoice, ...lowerArray]
    
    var randomNum = Math.floor(Math.random() * lowerArray.length)
    console.log(randomNum)
    password = password + lowerArray[randomNum]

  }
  console.log(finalchoice)

  if (uppercase === true) {

    finalchoice = [...finalchoice, ...upperArray]
    var randomNum = Math.floor(Math.random() * upperArray.length)
    console.log(randomNum)
    password = password + upperArray[randomNum]
  }
  console.log(finalchoice)

  if (numbers === true) {

    finalchoice = [...finalchoice, ...numbersArray]
    var randomNum = Math.floor(Math.random() * numbersArray.length)
    console.log(randomNum)
    password = password + numbersArray[randomNum]
  }
  console.log(finalchoice)

  if (characters === true) {

    finalchoice = [...finalchoice, ...charactersArray]
    var randomNum = Math.floor(Math.random() * charactersArray.length)
    console.log(randomNum)
    password = password + charactersArray[randomNum]
  }
  console.log(finalchoice)

 
 
  
  for (let index = 0; index < length-4; index++) {

// random number generator 
    var randomNum = Math.floor(Math.random() * finalchoice.length)
    console.log(randomNum)
    password = password + finalchoice[randomNum]
  }



  return password;

}

//generate password 8-128 characters



// confirm lowercase, uppercase, numeric, and/or special character 

