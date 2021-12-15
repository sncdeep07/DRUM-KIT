const musicalButtons = document.querySelectorAll(".drum");

// adding click listener to buttons
for (let i = 0; i < musicalButtons.length; i++) {
  musicalButtons[i].addEventListener("click", function () {
    const innerText = this.textContent;
    playAudio(innerText);
    btnAnimation(innerText);
  });
}

// adding keydown listener to document
document.addEventListener("keydown", function (e) {
  playAudio(e.key);
  if (
    e.key === "w" ||
    e.key === "a" ||
    e.key === "s" ||
    e.key === "d" ||
    e.key === "j" ||
    e.key === "k" ||
    e.key === "l"
  )
    btnAnimation(e.key);
});

// Play the specific audio when specific key or button are pressed
function playAudio(key) {
  switch (key) {
    case "w":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      console.log("Sorry! wrong key");
  }
}

// Adding animation to selected button
function btnAnimation(key) {
  const button = document.querySelector("." + key);
  button.classList.add("pressed");
  setTimeout(function () {
    button.classList.remove("pressed");
  }, 100);
}
