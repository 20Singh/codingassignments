// function clickme(){
//     // console.log("button is clicked");
// // document.getElementById("elevation").innerText="Here is it div tag"
// // let result =document.getElementsByClassName("elevation")
// // result[0].innerHTML="hi"
// // 
// // document.getElementById("container").style.flexDirection="column"
// // 
// document.getElementById("changed").innerText="Welcome to Elevation Academy"
// }
// function getoption(){
//     var result=document.getElementById("text")
//     result2=result.value
//     document.getElementById("output").textContent=result2

// }
// function dummy(){
// // document.getElementById("text").innerText="Hi"
// // var result =document.getElementsByClassName("text")
// // result[0].innerHTML="hello world"
// // var result =document.getElementsByTagName("div")
// // result[0].innerHTML="hello world"
// document.getElementById("change").innerText="Hello World"
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

