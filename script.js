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
  var newPass = "";
  var passLength = prompt("How many characters do you want?");
  var lowerCaseYes = confirm("Do you wan't lowercase letters?");
  var upperCaseYes = confirm("Do you want uppercase letters?");
  var numericYes = confirm("Do you want numbers?");
  var specialYes = confirm("Do you want special characters?");
  var options = {
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  };
  var randomStr = options.lowerCase[Math.floor(Math.random() * options.lowerCase.length)];
  for (var i = 0; i < passLength; i++) {
    newPass += randomStr[i];
    console.log(newPass);
  }
}
