
 // Generate button gives button function upon click
 var generateBtn = document.querySelector("#generate");
 generateBtn.addEventListener("click", writePassword);

 //Function start
function generatePassword() 
{
  // String variables
  var specialChar = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var number = "0123456789";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upper = lowerCase.toUpperCase();
  
  // Password length will be asked in prompt 
  // parsInt 
  var length = prompt("Please enter password length. Length should be betweeb 8 to 128");
  var lengthInt = parseInt(length);
  
  //If password less than 8 OR greater than 128
  if (lengthInt < 8 || lengthInt > 128) 
  {  
    alert("Your input is invalid");
    return;
  }
 
  //Vars assigned to confirms
  var useLower = confirm("Do you want to use lowercase characters in password?");
  var useUpper = confirm("Do you want to use uppercase characters in password?");
  var useSpecial = confirm("Do you want to use special characters in password?");
  var useNumeric = confirm("Do you want to use numeric characters in password?");

  // If all 4 are not yes
  if (useLower   !== true &&
      useUpper   !== true &&
      useSpecial !== true &&
      useNumeric !== true) 
  {
    alert("At least one of the criterias must be met");
    return;  
  }
  
  var validChar = "";

  // If all 4 are yes
  if (useLower  === true &&
      useUpper   === true &&
      useSpecial === true &&
      useNumeric === true)
  {
    validChar = lowerCase + upper + specialChar + number;
  }

  // If 3 are yes and 1 no
  else if(useLower   === true &&
          useUpper    === true &&
          useSpecial  === true) 
  {
    validChar = lowerCase + upper + specialChar;
  }
  else if(useLower   === true &&
          useUpper   === true &&
          useNumeric === true)
  {
    validChar = lowerCase + upper + number;
  }    
  else if(useLower   === true &&
          useSpecial === true &&
          useNumeric === true)
  {
    validChar = lowerCase + specialChar + number;
  }
  else if(useUpper   === true &&
          useSpecial === true &&
          useNumeric === true)
  {
    validChar = upper + specialChar + number;
  }

  // If 2 are no and 2 are yes
  else if(useLower === true &&
          useUpper === true)
  {
    validChar = lowerCase + upper;
  }
  else if(useLower   === true &&
          useSpecial === true)
  {
    validChar = lowerCase + specialChar;
  }
  else if(useLower   === true &&
          useNumeric === true)
  {
    validChar = lowerCase + number;
  }
  else if(useUpper   === true &&
          useSpecial === true)
  {
    validChar = upper + specialChar;
  }
  else if(useUpper   === true &&
          useNumeric === true)
  {
  }
  else if(useSpecial === true &&
          useNumeric === true)
  {
  }

  //If only one yes
  else if(useLower === true)
  {
  }
  else if(useLower === true)
  {
  }
  else if(useSpecial === true)
  {
  }
  else if (useNumeric === true)
  {
  }

  // For loop 
  var securePassword = "";
  console.log(validChar);
  for (var i = 0; i < lengthInt; ++i) 
  {
    var randomIndex = Math.floor(Math.random() * validChar.length);
    var randomChar = validChar[randomIndex];
    console.log(randomIndex)
    securePassword += randomChar;
  }
    // Returns back to original point
    return securePassword;
}
//  
function writePassword() 
{
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


