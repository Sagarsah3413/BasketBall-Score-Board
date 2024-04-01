document.getElementById("date").innerText = new Date();

let homeScore = document.getElementById("homeId");
let guestScore = document.getElementById("guestId");
let resetbtn = document.getElementsByClassName("saveResetClass");
let save = document.getElementById("saveScore");

let hValue = 0;
let gValue = 0;
let intervalID;

function result() {
  if (hValue == 21 && gValue < 21) {
    save.innerHTML =
      " - - - Match Completed - - - " +
      "<br>" +
      " Home Team Won By : " +
      (hValue - gValue) +
      " Points." +
      "<br>" +
      "The Home Score : " +
      hValue +
      "<br>" +
      "The Guest Score : " +
      gValue +
      "<br>";
    resetAfterCompletion();
  }
  if (hValue < 21 && gValue == 21) {
    save.innerHTML =
      " - - - Match Completed - - - " +
      "<br>" +
      " Guest Team Won By : " +
      (gValue - hValue) +
      " Points." +
      "<br>" +
      "The Home Score : " +
      hValue +
      "<br>" +
      "The Guest Score : " +
      gValue +
      "<br>";
    resetAfterCompletion();
  }
  if (hValue == 21 && gValue == 21) {
    save.innerHTML =
      " - - - Match Draw - - - " +
      "<br>" +
      "The Home Score : " +
      hValue +
      "<br>" +
      "The Guest Score : " +
      gValue +
      "<br>";
    resetAfterCompletion();
  }
  if (hValue > 21 || gValue > 21) {
    resetAfterCompletion();
  }
}

function haddone() {
  hValue += 1;
  homeScore.innerHTML = hValue;
  result();
}

function haddtwo() {
  hValue += 2;
  homeScore.innerHTML = hValue;
  result();
}

function haddthree() {
  hValue += 3;
  homeScore.innerHTML = hValue;
  result();
}

function gaddone() {
  gValue += 1;
  guestScore.innerHTML = gValue;
  result();
}

function gaddtwo() {
  gValue += 2;
  guestScore.innerHTML = gValue;
  result();
}

function gaddthree() {
  gValue += 3;
  guestScore.innerHTML = gValue;
  result();
}

function resetAllScore() {
  hValue = 0;
  gValue = 0;
  homeScore.innerHTML = "00";
  guestScore.innerHTML = "00";
  save.innerHTML = " The Result & Score Will Appear Here ";
  clearInterval(intervalID);
}

function resetAfterCompletion() {
  hValue = 0;
  gValue = 0;
  homeScore.innerHTML = "00";
  guestScore.innerHTML = "00";
  clearInterval(intervalID); 
}


resetAllScore();
