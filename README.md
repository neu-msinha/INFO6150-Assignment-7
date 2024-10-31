# INFO6150-Assignment-7

This repository contains my submission for Assignment 7, which includes two parts:

- **Part A**: A jQuery-based Simple Calculator Web Application with a Login Page.
- **Part B**: A Stopwatch Web Application utilizing Async, Await, Promises, Set Interval, and Clear Interval.

---

## Part A: Simple Calculator Web Application

### Overview

For Part A, I developed a Simple Calculator Web Application that consists of two pages: a Login Page with comprehensive field validations and a Calculator Page that performs basic arithmetic operations.

### Requirements

1. **Login Page**
   - **Fields**: 
     - Email (Only Northeastern email IDs)
     - User Name
     - Password
     - Confirm Password
   - **Validation Criteria**:
     - **Null Checks**: All fields must not be empty.
     - **Special Character Check**: Only valid characters allowed.
     - **Length Checks**: Each field has specific minimum and maximum length restrictions.
     - **Custom Error Messages**: Error messages are tailored to each validation type.
     - **Error Display**: Errors are shown below each field in red, without any pop-ups.
   - **Login Button**: Initially disabled; it becomes enabled only after all validations are successful.
   - **jQuery Validations**: I implemented all validations using jQuery.
   - **Redirection**: Upon successful login, the user is redirected to the Calculator Page.

2. **Calculator Page**
   - **Fields**:
     - Number 1 (First operand)
     - Number 2 (Second operand)
   - **Buttons**:
     - Add
     - Subtract
     - Multiply
     - Divide
   - **Validations**:
     - Only numeric values are allowed for Number 1 and Number 2.
     - **Null Checks**: Fields must not be empty.
     - **Special Character Check**: Only valid numbers allowed.
     - **Infinite Value Check**: Division by zero is handled appropriately.
   - **Single Arrow Function**: I used a single arrow function to handle all four operations (Add, Subtract, Multiply, and Divide).

### Basic CSS

- Basic CSS styles are applied to both pages to enhance the user interface.

---

## Part B: Stopwatch Web Application

### Overview

For Part B, I created a Stopwatch Web Application as a single-page application that displays the time in "HH:MM:SS" format and provides functionality to start, stop, and reset the timer.

### Requirements

- **Label**: Displays the current time in "HH:MM:SS" format, initially set to 00:00:00.
- **Date Picker**: 
  - Shows the current date.
  - Allows selection of past and future dates (not editable).
- **Buttons**:
  - Start: Begins the timer.
  - Stop: Pauses the timer.
  - Reset: Resets the timer to 00:00:00.
- **Asynchronous Operations**: I used Async, Await, and Promises to implement the timer functionality.
- **Intervals**: Implemented using Set Interval and Clear Interval.

### Basic CSS

- Basic CSS styles are applied to improve the layout and usability of the application.

---

## Submission Instructions

1. Both Part A and Part B of the assignments have been submitted on my **PRIVATE** GitHub account (using my Northeastern email account).
2. A combined zip file has been submitted on **CANVAS**.
3. The GitHub URL of the assignment is included in the Canvas remarks.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
