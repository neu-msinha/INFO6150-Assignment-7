$(document).on("keydown", function(event) {
  checkButtonState();
});

const checkButtonState = () => {
  const isUserNameValid = validateUserName();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();
  const isEmailValid = validateEmailField();

  const isValid = isUserNameValid && isPasswordValid && isConfirmPasswordValid && isEmailValid;
  $("#submit").prop("disabled", !isValid).toggleClass("disabled", !isValid);
};

const validateUserName = () => {
  const userName = $("#typeuserX").val();
  $("#usernameMsg").text(userName ? "" : "Username cannot be empty");
  return !!userName;
};

const validatePassword = () => {
  const password = $("#typePasswordX").val();
  let isValid = true;
  const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

  if (!password) {
    $("#passwordMsg").text("Password cannot be empty");
    isValid = false;
  } else if (password.length < 5 || password.length > 16) {
    $("#passwordMsg").text("Password must be between 5 and 16 characters");
    isValid = false;
  } else if (!specialCharPattern.test(password)) {
    $("#passwordMsg").text("Password must include at least one special character");
    isValid = false;
  } else {
    $("#passwordMsg").text("");
  }

  return isValid;
};

const validateConfirmPassword = () => {
  const password = $("#typePasswordX").val();
  const confirmPassword = $("#typeConfirmPasswordX").val();
  let isValid = true;

  if (!confirmPassword) {
    $("#confirmMsg").text("Confirm Password cannot be empty");
    isValid = false;
  } else if (password !== confirmPassword) {
    $("#confirmMsg").text("Passwords didn't match");
    isValid = false;
  } else {
    $("#confirmMsg").text("");
  }

  return isValid;
};

const validateEmailField = () => {
  const emailId = $("#typeEmailX").val();
  const domain = "northeastern.edu";
  const validateEmailId = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  const isValid = validateEmailId.test(emailId) && emailId.includes(domain);
  $("#emailMsg").text(isValid ? "" : "Enter a valid email @northeastern");
  
  return isValid;
};

$("#typePasswordX, #typeConfirmPasswordX").on("input", () => {
  validateConfirmPassword();
  checkButtonState();
});

$("#typeuserX").on("input", () => {
  validateUserName();
  checkButtonState();
});

$("#typeEmailX").on("input", () => {
  validateEmailField();
  checkButtonState();
});

var calculate = (operation) => {
  const n1 = parseFloat($("#n1").val());
  const n2 = parseFloat($("#n2").val());
  let result;

  switch (operation) {
    case 'add':
      result = n1 + n2;
      break;
    case 'subtract':
      result = n1 - n2;
      break;
    case 'divide':
      result = n1 / n2;
      break;
    case 'multiply':
      result = n1 * n2;
      break;
    default:
      result = 'Invalid operation';
  }

  $('#result').val(result);
}

$("#n1").on("keyup", () => {
  $("#n1msg").text(validatenumber($("#n1").val()) ? "" : "Enter a valid number");
});

$("#n2").on("keyup", () => {
  $("#n2msg").text(validatenumber($("#n2").val()) ? "" : "Enter a valid number");
});

const validatenumber = no => {
  const validatenumber1 = /^-?\d*\.?\d+$/;
  return validatenumber1.test(no);
};
