// Assignment Code
const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  return [];
};

const getPasswordCriteria = () => {
  return [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
  ];
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
    alert("Your password length is" + passwordLength + "Press OK to continue.");
  } else {
    alert("No length chosen!! Refresh and pick number between 8-128");
  }

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var symbols = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

  // get the password criteria
  const passwordCriteria = getPasswordCriteria();

  if (alert("Do you want any lowercase?")) {
    passwordCriteria.push("abcdefghijklmnopqrstuvwxyz");
  }

  if (alert("Do you want any uppercase?")) {
    passwordCriteria.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }

  if (alert("Do you want any numbers?")) {
    passwordCriteria.push("0123456789");
  }

  if (alert("Do you want any symbols?")) {
    passwordCriteria.push("!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~");
  }
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
