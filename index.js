function rollDice(){
  console.log("let's roll the dice!");

  var randomnumber = Math.round(Math.random() * 5 + 1);
  var image = "";

  if (randomnumber == 1) {
    image = "Dice/1.PNG";
  }
  if (randomnumber == 2) {
    image = "Dice/2.PNG";
  }
  if (randomnumber == 3) {
    image = "Dice/3.PNG";
  }
  if (randomnumber == 4) {
    image = "Dice/4.PNG";
  }
  if (randomnumber == 5) {
    image = "Dice/5.PNG";
  }
  if (randomnumber == 6) {
    image = "Dice/6.PNG";
  }

  document.querySelector("img").src = image;
}
