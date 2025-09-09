function getGrade()
// the function is called when the user clicks the "Get Grade" button
{
let marks = document.getElementById("marks").value
// Get the value entered in the input box with id="marks" and store it in the variable 'marks'
let outputMessage;
if (marks < 0 || marks > 100) {
    outputMessage = 'Invalid input. Please enter a number between 0 and 100'; //holds the final text to be displayed
    // if the number input is not a number or not between 0 and 100, print this message
} else {
  // If input is valid, we prepare to assign a grade.
  let grade;

  // Check the grading conditions:
  if (marks > 79) {
    grade = "A";
    // If marks are greater than 79, grade is "A".
  } 
  else if (marks >= 60) {
    grade = "B";
    // If marks are between 60 and 79, grade is "B".
  } 
  else if (marks >= 49) {
    grade = "C";
     // If marks are between 49 and 59, grade is "C".
  } 
  else if (marks >= 40) {
    grade = "D";
     // If marks are between 40 and 49, grade is "D".
  } 
  else {
    grade = "E";
    // If marks are less than 40, grade is "E".
  }

  outputMessage = `The grade is: ${grade}`;
  // `${grade}` inserts the grade value into the string.
}
document.getElementById("output").innerHTML = outputMessage;
// // This sends the result to the <p id="output"> in the HTML
}