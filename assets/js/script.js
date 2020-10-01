// Generate password based on user criteria
// NOTE: generatePassword() would still work if declared below writePassword() because of how JS works, but still good practice to declare functions before calling them.
// TODO: Put generatePasword() function here

 // Add uppercase function 

 // use querySelector when referencing an element in the HTML
 // Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

// TODO: Add logic to prompt user for criterias. Store user's choices in variables.
// TODO: Based on user's criterias, create a loop to generate each character of the password randomly
// TODO: Figure out how to store each newly generated character (What will be the type of the variable? How will I add new character(s) to the variable?)
// NOTE: generatePassword needs to return the password so the value can be stored in 'var password' in writePassword()
// NOTE: Look into ASCII table on how it can help with password generation

function generatePassword() 
{
  var length = prompt("Please enter password length");
  var lengthInt = parseInt(length);
  
  if (lengthInt < 8 || lengthInt > 128) 
  {  
    alert("Your input is invalid");
    return;
  }
 
  var useLower = confirm("Do you want to use lowercase characters in password?");
  var useUpper = confirm("Do you want to use uppercase characters in password?");
  var useSpecial = confirm("Do you want to use special characters in password?");
  var useNumeric = confirm("Do you want to use numeric characters in password?");

  if (useLower   !== true &&
      useUpper   !== true &&
      useSpecial !== true &&
      useNumeric !== true) 
  {
    alert("At least one of the criterias must be met");
    return;  
  }
  
  for (var i = 0; i < lengthInt; ++i) 
  {

  }

}

// Write password to the #password input
function writePassword() 
{
  var password = generatePassword(); // TODO: Write generatePassword() function
  var passwordText = document.querySelector("#password");


  passwordText.value = password;
}


