//--------------------QuUESTION 01--------------------//
var now = new Date();
document.write(now) + "<br>";

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
var now=new Date()
var date=now.getDate()

if(date >=15){
  document.write("First fifteen days of the month.<br>")  
}
else{
    document.write("Last days of the month.<br>")
}
//--------------------QuUESTION 06--------------------//
// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
// Create a Date object representing the current date and time
let now1 = new Date();
document.write("current date "+now1)
let millisecondsSinceEpoch = now1.getTime();
document.write(" Elapsed Milliseconds since january 1,1970" + millisecondsSinceEpoch)
let minutesSinceEpoch = Math.floor(millisecondsSinceEpoch / (1000 * 60));
document.write("Elapsed Minute since january 1,1970" + minutesSinceEpoch + "<br>");

//--------------------QuUESTION 07--------------------//
// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
let now2=new Date()
var hours=now2.getHours()
if(hours <=11){
    document.write("Its AM<br>")
}
else{
    document.write("Its PM<br>")
}

//--------------------QuUESTION 08--------------------// 
let laterDate = new Date(2020, 11, 31);
document.write("Later Date" + laterDate + "<br>");

//--------------------QuUESTION 09--------------------//
// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
let now3=new Date()
let ramzan=new Date(2015 ,6,18)
var out=now3-ramzan;
let daysDifference = Math.floor(out / (1000 * 60 * 60 * 24));
document.write("Time is" + daysDifference + "<br>")

//--------------------QuUESTION 10--------------------//
