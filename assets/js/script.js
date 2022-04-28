// Assignment Code
const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  const length = parseInt(
    prompt("Choose a length of password between 8-128 characters?")
  );

  if (length >= 8 && length <= 128) {
    prompt("Your password length is" + length + "Press OK to continue.");
  } else {
    alert("No length chosen!! Refresh and pick number between 8-128");
  }
};

const getPasswordCriteria = () => {
  let passwordValues = [];

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
  if (symbols) {
    passwordValues = passwordValues.concat(symbols);
  }

  return passwordValues;
};

const createRandomPassword = (passwordLength, criteria) => {
  console.log(passwordLength, criteria);
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    console.log("index being checked in for loop: ", i);
    let characters = criteria[i];
    console.log("Characters:", characters);

    let randNumber = Math.floor(Math.random() * criteria.length);
    console.log("Random number for the password:", randNumber);

    password += criteria[randNumber];
    console.log(password);
  }

  const allCharacters = criteria.join();

  return password;
};

// main function to generate the random password
const generatePassword = () => {
  // get the password length
  const passwordLength = getPasswordLength();

  // get the password criteria
  const passwordCriteria = getPasswordCriteria();

  // create random password
  const password = createRandomPassword(passwordLength, passwordCriteria);

  return password;
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword([]);
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
