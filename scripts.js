function getComputerChoice() {
  let choiceComputer = Math.floor(Math.random() * 3);

  if (choiceComputer === 0) {
    return "rock";
  } else if (choiceComputer === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, ComputerChoice, score) {
  if (humanChoice === ComputerChoice) {
    return "tie";
  } else if (selection[humanChoice] === ComputerChoice) {
    score.human++;
    return "human";
  } else {
    score.computer++;
    return "computer";
  }
}

function verifyMatch(result, humanChoice, ComputerChoice, score) {
  console.log(
    `Placar:\nHumano: ${score.human}\nComputador: ${score.computer}\n`
  );

  if (result === "tie") {
    console.log(`Ambos escolhemos ${humanChoice}! Nenhum ponto foi marcado.`);
  } else if (result === "human") {
    console.log(
      `Você marcou ponto! Você escolheu ${humanChoice} e eu escolhi ${ComputerChoice}!`
    );
  } else {
    console.log(
      `Eu marquei ponto! Eu escolhi ${ComputerChoice} e você escolheu ${humanChoice}!`
    );
  }

  if (score.human === 5 || score.computer === 5) {
    if (score.human > score.computer) {
      console.log(`Você ganhou! Parabéns!`);
    } else {
      console.log(`Eu ganhei dessa vez!`);
    }

    score.human = 0;
    score.computer = 0;
    console.log(`\nO placar foi zerado. Prepare-se para uma nova partida!`);
  }
}

const selection = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

let score = {
  human: 0,
  computer: 0,
  tie: 0,
};

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanSelection = button.id;
    const computerSelection = getComputerChoice();
    let result = playRound(humanSelection, computerSelection, score);
    verifyMatch(result, humanSelection, computerSelection, score);
  });
});
