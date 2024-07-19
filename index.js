//--------------------QuUESTION 01--------------------//
var now = new Date();
document.write(now + "<br>");

//--------------------QuUESTION 02--------------------//
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonthIndex = now.getMonth();
alert("Current Month: " + months[currentMonthIndex]);

//--------------------QuUESTION 03--------------------//
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonthIndex = now.getMonth();
alert("Current Month: " + months[currentMonthIndex].slice(0,3));

//--------------------QuUESTION 04--------------------//
var currentDay = now.getDay();
if(currentDay==0 || currentDay==6){
    alert("It's Funday");
}else{
    alert("Working Day");
}
 
//--------------------QuUESTION 05--------------------//
var now=new Date();
var date=now.getDate();

if(date >=15){
  document.write("First fifteen days of the month.<br>") ; 
}
else{
    document.write("Last days of the month.<br>");
}
//--------------------QuUESTION 06--------------------//
var now1 = new Date();
document.write("Current date " + now1 + "<br>");
var millisecondsSinceEpoch = now1.getTime();
document.write(" Elapsed Milliseconds since january 1,1970" + millisecondsSinceEpoch + "<br>");
var minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / (1000 * 60));
document.write("Elapsed Minute since january 1,1970" + minutesSinceEpoch + "<br>");

//--------------------QuUESTION 07--------------------//
var now2=new Date();
var hours=now2.getHours()
if(hours <=11){
    document.write("Its AM <br>");
}
else{
    document.write("Its PM <br>");
}

//--------------------QuUESTION 08--------------------// 
let laterDate = new Date(2020, 11, 31);
document.write("Later Date" + laterDate + "<br>");

//--------------------QuUESTION 09--------------------//
let now3=new Date();
let ramzan=new Date(2015 ,6,18);
var out=now3-ramzan;
let daysDifference = Math.floor(out / (1000 * 60 * 60 * 24));
document.write("Time is" + daysDifference + "<br>");
//--------------------QuUESTION 10--------------------//
var referenceDate = new Date();
var startOf2015 = new Date(2015, 0, 1); 
var timeDifference = referenceDate - startOf2015;
 var secondsElapsed = Math.floor(timeDifference / 1000);
document.write("On reference date " + referenceDate +", " + secondsElapsed + " seconds had passed since beginning of 2015. <br>") ;
//--------------------QuUESTION 11--------------------//

var currentDate = new Date();
document.write("Current date and time: " + currentDate.toString() + "<br>");
var currentHours = currentDate.getHours();
currentDate.setHours(currentHours + 1);
document.write("Date and time one hour ahead: " + currentDate.toString());
//--------------------QuUESTION 12--------------------//
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
//console.log(currentYear);

var pastYear = currentYear - 100;
//console.log(pastYear);

currentDate.setFullYear(pastYear);
alert("The date 100 years back was: " + currentDate.toDateString());

//--------------------QuUESTION 13--------------------//
var age = prompt("Please enter your age:");
age = parseInt(age);
//console.log(age);

var currentYear = new Date().getFullYear();
//console.log(currentYear);

var birthYear = currentYear - age;
//console.log(birthYear);

document.write("Your birth year is: " + birthYear);
//--------------------QuUESTION 14--------------------//
document.write("<h1> K-Electric Bill </h1>");
var customerName = prompt("Enter customer name..");
var month = prompt("Enter month..");
var unit = +prompt("Enter units..");
var charge = +prompt("Enter per unit charge..");
latePayment = 350;
var amountPayable = unit * charge;
var grossAmount = amountPayable + latePayment;

document.write("Customer Name: " + customerName  + "<br>");
document.write("Month: " + month  + "<br>");
document.write("Number of units: " + unit  + "<br>");
document.write("Charge per unit: " + charge  + "<br><br>");
document.write("Amount payable: " + amountPayable  + "<br>");
document.write("Late payment: " + latePayment  + "<br>");
document.write("Gross amount: " + grossAmount + "<br>");


