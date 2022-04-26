// Assignment Code
const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  return;
};

// criteria needed for the password
const lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbol = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ",",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// password criteria
const getPasswordCriteria = () => {};

const createRandomPassword = () => {};

// main function to generate the random password
const generatePassword = (lowerCase,upperCase,number,symbol) => {
  // get the password length
  const passwordLength = getPasswordLength(  
  // Alert when button clicked
  var passwordLength = prompt("Choose a length of the password between 8-128 characters");
  console.log(length);

  if (passwordLength > 8 || passwordLength < 128) {
    alert(
      "Your password length is " + passwordLength + ". Press OK to continue"
    );
  }
  else {
    alert(
      "Password must be between 8-128 characters. Click OK to try again"
    )}
    );

  // get the password criteria
  const passwordCriteria = getPasswordCriteria();

  // create random password
  const password = createRandomPassword(passwordLength, passwordCriteria);

  return password;
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
