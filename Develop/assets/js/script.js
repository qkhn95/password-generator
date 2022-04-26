// Assignment Code
const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  return [];
};

const getPasswordCriteria = () => {
  let values; = []

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
    "_",
    "`",
    "{",
    "|",
    "}",
  ];

  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
};

const createRandomPassword = () => {
  return [];
};

// main function to generate the random password
const generatePassword = () => {
  console.log("function 1");
  const passwordLength = getPasswordLength(
    prompt("Choose a length of password between 8-128 characters")
  );
  if (passwordLength >= 8 && passwordLength <= 128) {
    prompt(
      "Your password length is" + passwordLength + "Press OK to continue."
    );
  } else {
    alert("No length chosen!! Refresh and pick number between 8-128");
  }

  // get the password criteria
  const passwordCriteria = getPasswordCriteria();
  // lowercase prompt
  const lowercase = confirm("Do you want lowercase?");
  if (lowercase) {
    values = values.concat(lowercase);
  }

  // uppercase prompt
  const uppercase = confirm("Do you want uppercase?");
  if (uppercase) {
    values = values.concat(uppercase);
  }
  // numbers prompt
  const numbers = confirm("Do you want numbers?");
  if (numbers) {
    values = values.concat(numbers);
  }
  // symbols prompt
  const symbols = confirm("Do you want symbols?");
  if (numbers) {
    values = values.concat(symbols);
  }

  console.log(values);

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
