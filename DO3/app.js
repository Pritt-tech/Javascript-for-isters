// comparisons
let a = 7;
let b = 6;

//gt
console.log("----gt----");
console.log(a > b);

//gte
console.log("----gte----");
console.log(a >= b);

//lt
console.log("----lt----");
console.log(a < b);

//lte
console.log("----lte----");
console.log(a <= b);

//eq
console.log("----eq----");
console.log(a == b);

//identical (strict equality)
console.log("----seq----");
console.log(a === b);

//conditional statements -- you cna be able to execute a certain block of code based on a condition (if)

/**
 * 
 if(condition){
  //this block of code will run only if the condition is truthy.
}
 */

let x = 50;
let y = 10;

if (x < y) {
  alert("Red");
} else {
  alert("Black");
}

let username = "baraka";
let password = "123Asd";

let usernameInput = prompt("Enter username");

//username check;
if (usernameInput == username) {
  alert("Username correct enter password");
  let passwordInput = prompt("Enter password");

  if (passwordInput == password) {
    alert("Welcome ON BOARD");
  } else {
    alert("Wrong password Try again");
  }
} else {
  alert("Wrong username please try again");
}

let userAge = prompt("What is your age? ");

if (userAge >= 18) {
  alert("adult");
} else {
  alert("child");
}

//if below 18  - child
// 18 upto 35 - youth
// 35 and above - too old

if (userAge < 18) {
  console.log("child");
} else if (userAge <= 35) {
  console.log("youth");
} else {
  console.log("adult");
}

let role = prompt("User role");

/**------- Tasks ----------*/
/**------- ONE ----------*/
//Write a JavaScript program that accept two integers and display the larger.

function integer(a,b){
  if(a>=0 && b>=0)
{
  if(a!=b)
  {
    alert("The larger number is " + Math.max(a,b));
  } else{
    alert("Both numbers are equal!")
  }
} else{
  alert("Please add an integer!");
 }  
}
integer(-1,-1);

/**------- TWO ----------*/
//Write a javascript program to process loans based on the following scenarios
//1. an applicant is eligible for a loan if they have a good credit score and high income
//2. an applicant is eligible for a loan if they have a good credit and do not have a criminal record
//3. an applicant is eligible for a loan if they have a good credit score or high income





//1

let score1 = "good";
let income1 = "high";

let score1Input = prompt("What is your score?");
  if (score1Input == score1){
    alert("Proceed to enter income");
  }
  let income1Input = prompt("What is your income?");
  if (income1Input == income1){
    alert("You qualify for a loan");
  }




//2

let score  = "good";
let crimeRecord = "no";

let scoreInput = Prompt("What is your credit score?");

if (scoreInput == score) {
    alert("credit good,What is your crimeRecord?")
}

  let crimeRecordInput = Prompt("Do you have a crime record?");
    if (crimeRecordInput == crimeRecord) {
    alert("You qualify for this loan");
  }
else {
  alert("Bad credit You do not qualify");
}

//3
