$(document).on("keydown", function(event) {
  const isValid = validate();
  $("#submit").prop("disabled", !isValid).toggleClass("disabled", !isValid);
});

$("#typePasswordX, #typeConfirmPasswordX").on("input", () => {
  const password = $("#typePasswordX").val();
  const confirmPassword = $("#typeConfirmPasswordX").val();
  
  if (password !== confirmPassword) {
    $("#confirmMsg").text("Passwords didn't match");
    $("#submit").prop("disabled", true); 
  } else {
    $("#confirmMsg").text("");
    const isValid = validate();
    $("#submit").prop("disabled", !isValid);
  }
});

const validate = () => {
  let isValidated = true;

  const emailId = $("#typeEmailX").val();
  const password = $("#typePasswordX").val();
  const userName = $("#typeuserX").val();
  const confirmPassword = $("#typeConfirmPasswordX").val();

  localStorage.setItem("userName", userName);

  const domain = "northeastern.edu";
  const emailValid = validateEmail(emailId) && emailId.includes(domain);

  // Username validation
  $("#usernameMsg").text(userName ? "" : "Username cannot be empty");
  isValidated &= !!userName;

  // Password validation
  if (!password) {
    $("#passwordMsg").text("Password cannot be empty");
    isValidated = false;
  } else if (password.length < 5 || password.length > 16) {
    $("#passwordMsg").text("Password must be between 5 and 16 characters");
    isValidated = false;
  } else {
    $("#passwordMsg").text(""); // Clear the message if valid
  }

  // Confirm password validation
  $("#confirmMsg").text(confirmPassword ? "" : "Confirm Password cannot be empty");
  isValidated &= !!confirmPassword;

  // Email validation
  if (!emailValid) {
    $("#emailMsg").text("Enter a valid email @northeastern");
    isValidated = false;
  } else {
    $("#emailMsg").text("");
  }

  return isValidated;
};

const validateEmail = email => {
  const validateEmailId = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return validateEmailId.test(email);
};

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
