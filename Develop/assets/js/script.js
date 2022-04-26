// Assignment Code
const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  // Need to fix this part
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
  // get the password length
  const passwordLength = getPasswordLength(
    prompt("Choose a length of password between 8-128 characters")
  );

  console.log(passwordLength);

  if (isNaN(passwordLength)) {
    alert(
      "You must choose a number between 8 and 128!! Refresh page to restart"
    );
  } else if (passwordLength >= 8 && passwordLength <= 128) {
    alert(
      "Your password length is" + passwordLength + ". Press OK to continue."
    );
  } else {
    alert("No length chosen, please pick between 8-128 characters.");
  }

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
