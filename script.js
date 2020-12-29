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
  console.log(passLength);
  console.log(typeof passLength);

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
    var lowerCaseYes = confirm("Do you wan't lowercase letters?");
    console.log(lowerCaseYes);
    var upperCaseYes = confirm("Do you want uppercase letters?");
    console.log(upperCaseYes);
    var numericYes = confirm("Do you want numbers?");
    console.log(numericYes);
    var specialYes = confirm("Do you want special characters?");
    console.log(specialYes);

    // Declared options object
    var options = {
      lowerCase: "abcdefghijklmnopqrstuvwxyz",
      upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numeric: "0123456789",
      special: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    };

    // Conditionals based on confirm messages
    if (lowerCaseYes === true) {
      randomStr += options.lowerCase;
      console.log(randomStr);
    }
    if (upperCaseYes === true) {
      randomStr += options.upperCase;
      console.log(randomStr);
    }
    if (numericYes === true) {
      randomStr += options.numeric;
      console.log(randomStr);
    }
    if (specialYes === true) {
      randomStr += options.special;
      console.log(randomStr);
    }
    if (randomStr == undefined) {
      alert("You must choose at least one character type.");
      return "You must choose at least one character type.";
    }
    console.log(randomStr);
    console.log(typeof randomStr);

    // For loop to select random characters based on conditionals
    for (i = 0; i < passLength; i++) {
      newPass += randomStr[Math.floor(Math.random() * randomStr.length)];
      console.log(newPass);
    }
    return newPass;
  }
}
