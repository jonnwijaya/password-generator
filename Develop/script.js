// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  var userChoice = window.prompt("Length of password (min. 8 characters and max. 128 characters)");

  var lowcase = confirm("include lowercase character");

  var upcase = confirm("iclude uppercase character");

  var num = confirm("include numeric character");

  var specialcharacter = confirm("include special character");

  if (
    (lowcase === true) &&
    (upcase === true) &&
    (num === true) &&
    (specialcharacter === true)
    ) {
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'()*+,-./:;<=>?@[]/^_`{|}~";
  }

  else if (
    (lowcase === true) &&
    (upcase === true) &&
    (num === true) &&
    (specialcharacter === false)
    ) {
    characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }

  else if (
    (lowcase === true) &&
    (upcase === true) &&
    (num === false) &&
    (specialcharacter === false)
    ) {
      characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  }

  else if (
    (lowcase === true) &&
    (upcase === false) &&
    (num === false) &&
    (specialcharacter === true)
  ) {
    characters = "abcdefghijklmnopqrstuvwxyz";
  }

  else {
    window.alert("error");
  }

  var length = userChoice;
      charset = characters;
      retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
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
