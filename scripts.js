function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice, score) {
  if (humanChoice === computerChoice) return "tie";
  if (selection[humanChoice] === computerChoice) {
    score.human++;
    return "human";
  } else {
    score.computer++;
    return "computer";
  }
}

function updateScoreboard(score) {
  humanScore.textContent = score.human;
  computerScore.textContent = score.computer;
}

function displayMessage(result, humanChoice, computerChoice) {
  if (result === "tie") {
    message.textContent = `Ambos escolhemos ${humanChoice}! Nenhum ponto foi marcado.`;
  } else if (result === "human") {
    message.textContent = `Você marcou ponto! ${humanChoice} vence ${computerChoice}.`;
  } else {
    message.textContent = `Eu marquei ponto! ${computerChoice} vence ${humanChoice}.`;
  }
}

function checkWinner(score) {
  if (score.human === 5 || score.computer === 5) {
    const winnerText =
      score.human > score.computer ? "Você venceu!" : "Eu venci!";
    winner.textContent = winnerText;
    messageScore.textContent =
      "Clique em qualquer botão para começar uma nova partida!";

    score.human = 0;
    score.computer = 0;

    gameReset = true;
  }
}

const selection = { rock: "scissors", scissors: "paper", paper: "rock" };
let score = { human: 0, computer: 0 };
let gameReset = false;

const message = document.querySelector("#message");
const humanScore = document.querySelector("#humanScore");
const computerScore = document.querySelector("#computerScore");
const winner = document.querySelector("#winner");
const messageScore = document.querySelector("#messageScore");

const buttons = document.querySelectorAll(".buttons button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (gameReset) {
      winner.textContent = "";
      messageScore.textContent = "";
      gameReset = false;
    }

    const humanChoice = button.id;
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice, score);
    updateScoreboard(score);
    displayMessage(result, humanChoice, computerChoice);
    checkWinner(score);
  });
});
