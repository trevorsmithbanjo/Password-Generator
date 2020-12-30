// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generatePassword function
function generatePassword() {

  // Declared variables
  var newPass = "";
  var randomStr = "";
  var passLength = parseInt(prompt("How many characters do you want?"));

  // Test for passLength to be between 8 and 128
  if (isNaN(passLength) === true) {
    alert("Password length must be no less than 8 characters and no more than 128.");
    return "Password length must be no less than 8 characters and no more than 128."
  }
  else if (passLength < 8 || passLength > 128) {
    alert("Password length must be no less than 8 characters and no more than 128.");
    return "Password length must be no less than 8 characters and no more than 128."
  }
  else {
    // User can confirm character type
    var lowerCaseYes = confirm("Do you wan't lowercase letters?");
    var upperCaseYes = confirm("Do you want uppercase letters?");
    var numericYes = confirm("Do you want numbers?");
    var specialYes = confirm("Do you want special characters?");

    // Declared options object
    var options = {
      lowerCase: "abcdefghijklmnopqrstuvwxyz",
      upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numeric: "0123456789",
      special: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    };

    // Test for at least 1 character type
    if (lowerCaseYes === false
      && upperCaseYes === false
      && numericYes === false
      && specialYes === false) {
      alert("You must choose at least one character type.");
      return "You must choose at least one character type.";
    }
    else {
      // Conditionals based on confirm messages
      if (lowerCaseYes === true) {
        randomStr += options.lowerCase;
      }
      if (upperCaseYes === true) {
        randomStr += options.upperCase;
      }
      if (numericYes === true) {
        randomStr += options.numeric;
      }
      if (specialYes === true) {
        randomStr += options.special;
      }

      // For loop to select random characters based on conditionals
      for (i = 0; i < passLength; i++) {
        newPass += randomStr[Math.floor(Math.random() * randomStr.length)];
      }
      return newPass;
    }
  }
}
