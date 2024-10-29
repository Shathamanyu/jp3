console.log("Question-1 (performance level)");
console.log("---------------------------");

var a1 = 65;

a1 >= 90
  ? console.log(`Excellent with score of ${a1}`)
  : a1 >= 60 && a1 <= 89
  ? console.log(`Good with score of ${a1}`)
  : console.log(`Needs to improve with score ${a1}`);

console.log("---------------------------");

console.log("Question-2 (Weekday or Weekend)");
console.log("---------------------------");


// var a2=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
var a2 = "Monday";
a2 == "Sunday" || a2 == "Saturday"
  ? console.log("Weekend")
  : a2 == "Monday" ||
    a2 == "Tuesday" ||
    a2 == "Wednesday" ||
    a2 == "Thursday" ||
    a2 == "Friday"
  ? console.log("Weekday")
  : console.log("Invalid Input");


console.log("---------------------------");
console.log("Question-3 (Check Palindrome)");
console.log("---------------------------");


var str = "Shathamanyu";
var str1 = "";
for (i = str.length - 1; i >= 0; i--) {
  str1 += str[i];
}
str == str1 
    ? console.log("palindrome") 
    : console.log("Not palindrome");


console.log("---------------------------");
console.log("Question-4 (Right Angle Triangle)");
console.log("---------------------------");

var st = "Shathamanyu";
var st1 = "";
for (i = 0; i <= st.length - 1; i++) {
  st1 += st[i];
  console.log(st1);
}

console.log("---------------------------");
