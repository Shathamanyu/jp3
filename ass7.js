// Qusetion -1
console.log("voting eligibility");
console.log("------------------------");

var a = 18 ;
var cs = true ;

if (a >= 18 && cs){
    console.log("can Vote");
}
else{
    console.log("can't Vote");
}

// Qusetion -2
console.log("Admision to club");
console.log("------------------------");
var a1 = 29 ;
var ac = true ;

if (a1 >= 21 || ac){
    console.log("can enter the club");
}
else{
    console.log("can't enter the club");
}


// Qusetion -3
console.log("Discount Eligibility");
console.log("------------------------");
var a2 = 60 ;
var de = true ;

if (a2 >= 65 || de){
    console.log("can use the discount");
}
else{
    console.log("can't use the discount");
}


// Qusetion -3
console.log("Scholarship Eligibility");
console.log("------------------------");
var a2 = 3.99 ;
var ec = true ;
var rc = false ;


if (a2 >= 3.5 && (ec || rc)){
    console.log("can use the Scholarship amount");
}
else{
    console.log("can't use the Scholarship amount");
}