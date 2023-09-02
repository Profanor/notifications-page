//grab the unread divs
const mark1 = document.querySelector("webber");
const mark2 = document.querySelector("angela");
const mark3 = document.querySelector("jacob");
const notifyMe = document.querySelector("number");
const toggleMe = document.querySelector("toggle");

//reset the number of notifications to zero
function clearState(e) {
    document.getElementById("number").innerHTML = 0;
    document.getElementById("webber").style.backgroundColor = "white";
    document.getElementById("angela").style.backgroundColor = "white";
    document.getElementById("jacob").style.backgroundColor = "white";
    document.getElementById("kim").style.color = "gray";
}
e.preventDefault();
