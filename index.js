//count buttons
var numOfButtons = document.querySelectorAll(".drum").length;

//add event listener to all 7 buttons:
for (var i = 0; i < numOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    
//use switch statements to detect which button is clicked
    switch(buttonInnerHTML) {
            case "w":
                    var snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    console.log(buttonInnerHTML);
                break;
            case "a":
                    var kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();
                    console.log(buttonInnerHTML);
                break;
            case "s":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    console.log(buttonInnerHTML);
                break;
            case "d":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    console.log(buttonInnerHTML);
                break;
            case "j":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    console.log(buttonInnerHTML);
                break;
            case "k":
                    var tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    console.log(buttonInnerHTML);
                break;
            case "l":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    console.log(buttonInnerHTML);
                break;
            default: console.log(buttonInnerHTML);
        }
        
});
}
