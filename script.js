// Assignment code here
var generateBtn = document.querySelector("#generate");

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var passLength;
var confirmLc;
var confirmUc;
var confirmNum;
var confirmSpec;
var userOptions;

var blankUc = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start function
function generatePassword() {
  // Prompts for user to selected their options for password
  passLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  console.log("Password length " + passLength);
  
  if(!passLength) {
    alert("Required value try again");

  } else if (passLength < 8 || passLength > 128) {
    passLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passLength);
  // pop up messages for the 4 choices cancel/ok
  } else { 
    confirmLc = confirm("Will this contain lower case letters?");
    console.log("Lower case " + confirmLc);
    confirmUc = confirm("Will this contain upper case letters?");
    console.log("Upper case " + confirmUc);
    confirmNum = confirm("Will this contain numbers?");
    console.log("Number " + confirmNum);
    confirmSpec = confirm("Will this contain special characters?");
    console.log("Special Character " + confirmSpec);

  };

  // No option chosen
  if (!confirmLc && !confirmUc && !confirmNum && !confirmSpec) {
    userOptions = alert("You must choose a criteria");

  // 4 options true/chosen
  } else if (confirmLc && confirmUc && confirmNum && confirmSpec) {
    userOptions = lowerCase.concat(upperCase, numbers, special);
    console.log(userOptions);
  }

  // 3 options true/chosen
  else if (confirmLc && confirmUc && confirmNum) {
    userOptions = lowerCase.concat(upperCase, numbers);
    console.log(userOptions);
  }
  else if (confirmLc && confirmUc && confirmSpec) {
    userOptions = lowerCase.concat(upperCase, special);
    console.log(userOptions);
  }
  else if (confirmLc && confirmNum && confirmSpec) {
    userOptions = lowerCase.concat(numbers, special);
    console.log(userOptions);
  }
  else if (confirmUc && confirmNum && confirmSpec) {
    userOptions = upperCase.concat(numbers, special);
    console.log(userOptions);
  }

  // 2 options true/chosen
  else if (confirmLc && confirmUc) {
    userOptions = lowerCase.concat(upperCase);
    console.log(userOptions);
  }
  else if (confirmLc && confirmNum) {
    userOptions = lowerCase.concat(numbers);
    console.log(userOptions);
  }
  else if (confirmLc && confirmSpec) {
    userOptions = lowerCase.concat(special);
    console.log(userOptions);
  }
  else if (confirmUc && confirmNum) {
    userOptions = upperCase.concat(numbers);
    console.log(userOptions);
  }
  else if (confirmUc && confirmSpec) {
    userOptions = upperCase.concat(special);
    console.log(userOptions);
  }
  else if (confirmNum && confirmSpec) {
    userOptions = numbers.concat(special);
    console.log(userOptions);
  }

  // 1 option true/chosen
  else if (confirmLc) {
    userOptions = lowerCase;
    console.log(userOptions);
  }
  else if (confirmUc) {
    userOptions = blankUc.concat(upperCase);
    console.log(userOptions);
  }
  else if (confirmNum) {
    userOptions = numbers;
    console.log(userOptions);
  }
  else if (confirmSpec) {
    userOptions = special;
    console.log(userOptions);
  };

  // variable of empty password
  var blankPass = [];
  
  // randomizing
  for (var i = 0; i < passLength; i++) {
    var choiceAll = userOptions[Math.floor(Math.random() * userOptions.length)];
    blankPass.push(choiceAll);
    console.log(choiceAll);
  }

  //return password on screen
  var password = blankPass.join("");
  console.log("Your Password is: " + password);
  return password;
}