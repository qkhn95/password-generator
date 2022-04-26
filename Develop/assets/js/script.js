// Assignment Code
const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  const length = parseInt(
    prompt("Choose a length of password between 8-128 characters?")
  );

  if (length >= 8 && length <= 128) {
    return length;
  } else alert("Password must be between 8-128 characters!!!");
};

const getPasswordCriteria = () => {
  let passwordValues;
  [];

  const lowercase = [
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

  const uppercase = [
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

  const symbols = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "*",
    "+",
    "-",
    "/",
    ":",
    ";",
    "=",
    "@",
    "[",
    "]",
    "_",
    "{",
    "|",
    "}",
  ];

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // lowercase prompt
  const lowercaseQuestion = confirm("Do you want lowercase?");
  if (lowercase) {
    passwordValues = passwordValues.concat(lowercase);
  }

  // uppercase prompt
  const uppercaseQuestion = confirm("Do you want uppercase?");
  if (uppercase) {
    passwordValues = passwordValues.concat(uppercase);
  }
  // numbers prompt
  const numbersQuestion = confirm("Do you want numbers?");
  if (numbers) {
    passwordValues = passwordValues.concat(numbers);
  }
  // symbols prompt
  const symbolsQuestion = confirm("Do you want symbols?");
  if (numbers) {
    passwordValues = passwordValues.concat(symbols);
  }
};

// main function to generate the random password
const generatePassword = () => {
  // get the password criteria
  const passwordCriteria = getPasswordCriteria();

  return passwordValues;
};

// for loop to allow reload for different password

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword([]);
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
