function play(choice) {
  let pChoice = choice;
  let oChoice = Math.floor(Math.random() * 3 + 1);
  document.getElementById('o').src = "";
  document.getElementById('result').innerHTML = ". . .";
  let wins = sessionStorage.getItem("winCount");
  let ties = sessionStorage.getItem("tieCount");
  let losses = sessionStorage.getItem("lossCount");
  if (wins == null) {
    wins = 0;
  } else {
    wins = wins;
  };
  if (ties == null) {
    ties = 0;
  } else {
    ties = ties;
  };
  if (losses == null) {
    losses = 0;
  } else {
    losses = losses;
  };
  setTimeout(() => {
    if (oChoice === 1 && pChoice === "rock") {
      document.getElementById("o").className = "far fa-hand-rock";
      document.getElementById('result').innerHTML = "Rock ties rock. No one wins.";
      ++ties;
    } else if (oChoice === 1 && pChoice === "scissors")  {
      document.getElementById("o").className = "far fa-hand-rock";
      document.getElementById('result').innerHTML = "Scissors lose to rock. You lose.";
      ++losses;
    } else if (oChoice === 1 && pChoice === "paper") {
      document.getElementById("o").className = "far fa-hand-rock";
      document.getElementById('result').innerHTML = "Paper beats rock. You win.";
      ++wins;
    } else if (oChoice === 2 && pChoice === "rock")  {
      document.getElementById("o").className = "far fa-hand-paper";
      document.getElementById('result').innerHTML = "Rock loses to paper. You lose.";
      ++losses;
    } else if (oChoice === 2 && pChoice === "paper")  {
      document.getElementById("o").className = "far fa-hand-paper";
      document.getElementById('result').innerHTML = "Paper ties paper. No one wins.";
      ++ties;
    } else if (oChoice === 2 && pChoice === "scissors")  {
      document.getElementById("o").className = "far fa-hand-paper";
      document.getElementById('result').innerHTML = "Scissors cut paper. You win.";
      ++wins;
    } else if (oChoice === 3 && pChoice === "rock")  {
      document.getElementById("o").className = "far fa-hand-scissors";
      document.getElementById('result').innerHTML = "Rock beats scissors. You win.";
      ++wins;
    } else if (oChoice === 3 && pChoice === "paper")  {
      document.getElementById("o").className = "far fa-hand-scissors";
      document.getElementById('result').innerHTML = "Paper loses to scissors. You lose.";
      ++losses;
    } else {
      document.getElementById("o").className = "far fa-hand-scissors";
      document.getElementById('result').innerHTML = "Scissors tie scissors. No one wins.";
      ++ties;
    }
    sessionStorage.setItem("winCount", wins);
    sessionStorage.setItem("tieCount", ties);
    sessionStorage.setItem("lossCount", losses);
    document.getElementById('wins').innerHTML = sessionStorage.getItem("winCount");
    document.getElementById('ties').innerHTML = sessionStorage.getItem("tieCount");
    document.getElementById('losses').innerHTML = sessionStorage.getItem("lossCount");
  }, 200);
}
function reset() {
  sessionStorage.setItem("winCount", 0);
  sessionStorage.setItem("tieCount", 0);
  sessionStorage.setItem("lossCount", 0);
  document.getElementById('wins').innerHTML = sessionStorage.getItem("winCount");
  document.getElementById('ties').innerHTML = sessionStorage.getItem("tieCount");
  document.getElementById('losses').innerHTML = sessionStorage.getItem("lossCount");
  document.getElementById('o-img').src = "svg/mystery.svg";
  document.getElementById('result').innerHTML = "Result";
}
