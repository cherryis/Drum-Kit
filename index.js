//----- Detecting Button Press
let numberOfDrums = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrums; i++) {
  //anonymous function in array of drum class
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    //when you test => alert("I got clicked!");
    // this.style.color = "#ff6680"; //change text color

    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}


//---- Detecting Keyboard Press
document.addEventListener("keydown", function(event){ //U can change 'event' -> 'asd'
    makeSound(event.key);
});

function makeSound(key) { //key => parameter from buttonInnerHTML
    switch (key) {
        case "w":
          let tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
  
        case "a":
          let tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;
  
        case "s":
          let tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
  
        case "d":
          let tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;
  
        case "j":
          let crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;
  
        case "k":
          let kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;
  
        case "l":
          let snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;
  
        default: console.log(key);  
  
      }
  
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");  //added class name 'pressed' => '. drum pressed' after keyboard pressed
    
    setTimeout(function() 
        {
            activeButton.classList.remove("pressed", 300); // only for 0.3sec  (1sec = 1*1000)
        })
    
}