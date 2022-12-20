//count buttons
var numOfButtons = document.querySelectorAll(".drum").length;

//add event listener to all 7 buttons:
for (var i = 0; i<numOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        alert("I got clicked!");
});
}