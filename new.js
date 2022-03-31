// Write the code to access element which is having id as "text"
let a = document.getElementById("text");
console.log(a);
// document.getElementById("text").innerText="Hi"

// Write the code to access element which is having tag as "h1"
let b= document.getElementsByTagName("h1");
console.log(b);
console.log(b[0].innerText);
// var result =document.getElementsByTagName("div")
//  result[0].innerHTML="hello world"

// Write the code to access element which is having class as "box"

let c=document.getElementsByClassName("box");
console.log(c);
console.log(c[0].innerText);

// let result =document.getElementsByClassName("elevation")
//  result[0].innerHTML="hi"

// "<h1>Hello </h1>

// Change the heading from ""Hello"" to ""Hello World"" using DOM functions"
// let d=document.getElementsByTagName("h1")
// console.log(d[0].innerText="Hello world");
 function changetext(){
document.getElementById("change").innerText="Hello World"}



// var result =document.getElementsByTagName("div")
// result[0].innerHTML="hello world"

// Question
// Create three cards on HTML page and arrange them using flex property in
//  row or horizontal direction and also create button at the bottom
//   named "Change Flex direction". When user clicks on this
//  button, the cards arrangement should be changed to vertical direction.
function chgdir(){
document.getElementById("container").style.flexDirection="column"}

// Question
// "<h1>Hello </h1>

// Add one style attribute and give text color as red and id 
// attribute and give the id 
// value as ""heading"" in the above given h1 tag using DOM functions"

// let f=document.getElementsByTagName("h1")[0];
// f.setAttribute("id","heading")
// document.getElementById("heading").style.color="red";
function red(){
    document.getElementById("heading").innerText="Hello".style.color="red";
    
}



// Create an HTML page having content as Hello world and a button named 
// Replace Text. When user will click on this button 
// page content should be changed to "Welcome to Elevation academy"

function changetext(){
document.getElementById("replace").innerText="Welcome to Elevation Academy"}

// Write code to implement timer clock using JS -- display HH:MM:SS -- the
//  time should keep updating every second
function clock(){
    var hours = document.getElementById("hour");
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var am = document.getElementById("ampm");


    var time = new Date();

    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";


    if (hrs == 0) {
        hrs = 12;
    }

    if (hrs > 12) {
        hrs = hrs - 12;
        am_pm = "PM";
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    hours.innerText = hrs;
    minutes.innerText = mins;
    seconds.innerText = secs;
    am.innerText = am_pm;
}

setInterval(clock,1000);


// Create a select drop down for
//  selecting Year 20-21, 21-22 etc. Print the item text selected
function getoption(){
        var result=document.getElementById("text")
        result2=result.value
        document.getElementById("output").textContent=result2

}