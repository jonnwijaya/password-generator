// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  while (true) {
    var userChoice = window.prompt("Length of password (min. 8 characters and max. 128 characters)");

    if (!userChoice) {
      userChoice = alert("Please add a value");
    }

    if (userChoice < 8 || userChoice > 128) {
      userChoice = alert("Please add a value higher than 8 and lower than 128");
    }

    if (userChoice >= 8 && userChoice <= 128) {
      break;
    }
  }

  var lowCase = confirm("Include lowercase character");

  var upCase = confirm("Include uppercase character");

  var num = confirm("Include numeric character");

  var specialCharacterPrompt = confirm("Include special character");

  var characterArray = [];

  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  var numeric = ["1","2","3","4","5","6","7","8","9","0"];

  var specialCharacter = ["!","'",'"',"#","$","%","&","'","(",")","*","+","-",".","/",";",":","<","=",">","?","@"];

  if(lowCase === true) {
    characterArray = characterArray.concat(lowerCase);
  }

  if(upCase === true) {
    characterArray = characterArray.concat(upperCase);
  }

  if(num === true) {
    characterArray = characterArray.concat(numeric);
  }

  if(specialCharacterPrompt === true) {
    characterArray = characterArray.concat(specialCharacter);
  }

  var length = userChoice;
  var charac = characterArray.join("");
      retVal = "";
  for (var i = 0, n = charac.length; i < length; ++i) {
      retVal += charac.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
