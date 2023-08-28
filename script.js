// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Added a prompt funtion to direct the user into answering the criteria required for password 
function generatePassword() {
  var passwordLength = prompt("Enter password length:");
  
  if (passwordLength === null || isNaN(passwordLength)) {
    return "Password generation canceled.";
  }
  
  passwordLength = parseInt(passwordLength);

  if (passwordLength < 8) {
    return "Password length must be at least 8 characters.";
  }

  if (passwordLength > 128) {
    return "Password length can't be more than 128 characters.";
  }

// All the special requirements made into seperate variables to give the user choice to include them or not

  var useUpper = confirm("Include uppercase letters?");
  var useLower = confirm("Include lowercase letters?");
  var useNumb = confirm("Include numbers?");
  var useSpec = confirm("Include special characters?");

//If chosen the var will include a charset with the following choices  
  var characters = "";
  if (useUpper) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (useLower) characters += "abcdefghijklmnopqrstuvwxyz";
  if (useNumb) characters += "0123456789";
  if (useSpec) characters += "!@#$%^&*()_-+=<>?";

  //If none of the var are chosen the generate password box will display the following 
  if (characters === "") {
    return "Please select at least one character type.";
  }

  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var completePass = Math.floor(Math.random() * characters.length);
    password += characters.charAt(completePass);
  }

  return password;
} // end of prompt function

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);