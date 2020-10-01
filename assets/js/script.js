// Generate password based on user criteria
// NOTE: generatePassword() would still work if declared below writePassword() because of how JS works, but still good practice to declare functions before calling them.
// TODO: Put generatePasword() function here

// Variables
var confirmNumber = (1, 2, 3, 4, 5, 6, 7, 8, 9);
var confirmCharacter = ("!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~");
var confrimLowerCase = ("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" );
var confrimUpperCase = ()
 // Add uppercase function 

 // Responds to click
get.addEventListener("click", function () {
    var = generatePassword ();
    document.getElementById("password");
});
 // Add event listener to generate button
var generateBtn = document.querySelector("#generate");
  generateBtn.addEventListener("click", writePassword);


// TODO: Add logic to prompt user for criterias. Store user's choices in variables.
// TODO: Based on user's criterias, create a loop to generate each character of the password randomly
// TODO: Figure out how to store each newly generated character (What will be the type of the variable? How will I add new character(s) to the variable?)
// NOTE: generatePassword needs to return the password so the value can be stored in 'var password' in writePassword()
// NOTE: Look into ASCII table on how it can help with password generation

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // TODO: Write generatePassword() function
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);