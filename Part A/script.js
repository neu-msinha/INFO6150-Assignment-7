var validate =  () => {

  var isValidated = true;

  const emailId = $("#typeEmailX");
  const password = $("#typePasswordX");
  const userName = $("#typeuserX");
  const confirmPassword = $("#typeConfirmPasswordX");

  localStorage.setItem("userName", userName.val());

  const domain = "northeastern.edu";
  let emailvalid = false;

  if (validateEmail(emailId.val()) && emailId.val().indexOf(domain) !== -1) {
    emailvalid = true;
  } else if (emailId.val().indexOf(domain) === -1) {
    emailvalid = false;
  }

  if (userName.val() === "") {
    $("#usernameMsg").text("Username cannot be empty");
    
  }
  if(password.val() === "") {
    $("#passwordMsg").text("Password cannot be empty");
    isValidated = false;
  }
  if(confirmPassword.val() === "") {
    $("#confirmMsg").text("Confirm Password cannot be empty");
    isValidated = false;
  }
  if (emailvalid === false) {
    $("#emailMsg").text("enter the valid email @northeastern");
    isValidated = false;
  } 
  if(password.val() !== confirmPassword.val()) {
    $("#confirmMsg").text("Passwords didnt match");
    isValidated = false;
  }
  
  return isValidated;
}

const validateEmail = email => {
  const validateEmailId = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return validateEmailId.test(email);
};

function calculate(operation) {
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

function calcadd() {
  const n1 = parseFloat($("#n1").val());
  const n2 = parseFloat($("#n2").val());
  $('#result').val(n1 + n2);
}

function calcsub() {
  const n1 = parseFloat($("#n1").val());
  const n2 = parseFloat($("#n2").val());
  $('#result').val(n1 - n2);
}

function calcdivide() {
  const n1 = parseFloat($("#n1").val());
  const n2 = parseFloat($("#n2").val());
  $('#result').val(n1 / n2);
}

function calcmultiply() {
  const n1 = parseFloat($("#n1").val());
  const n2 = parseFloat($("#n2").val());
  $('#result').val(n1 * n2);
}

$("#n1").on("keyup", () => {
  if (validatenumber($("#n1").val())) {
    $("#n1msg").text("");
  } else {
    $("#n1msg").text("Enter the valid number");
  }
});

$("#n2").on("keyup", () => {
  if (validatenumber($("#n2").val())) {
    $("#n2msg").text("");
  } else {
    $("#n2msg").text("Enter the valid number");
  }
});

const validatenumber = no => {
  const validatenumber1 = /^[0-9]\d*(\.\d+)?$/;
  return validatenumber1.test(no);
};
