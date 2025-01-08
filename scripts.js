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

function getHumanChoice() {
  let choiceHuman = prompt(
    "Escolha entre rock, paper ou scissors: "
  ).toLocaleLowerCase();

  while (
    choiceHuman !== "rock" &&
    choiceHuman !== "paper" &&
    choiceHuman !== "scissors"
  ) {
    choiceHuman = prompt(
      "Essa não é uma opção valida, escolha entre rock, paper ou scissors: "
    );
  }

  return choiceHuman;
}

function playRound(humanChoice, ComputerChoice, score) {
  const selection = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };

  if (humanChoice === ComputerChoice) {
    console.log(`Empatamos! Ambos escolhemos ${humanChoice}!`);
  } else if (selection[humanChoice] === ComputerChoice) {
    console.log(
      `Você ganhou! Você escolheu ${humanChoice} e eu escolhi ${ComputerChoice}!`
    );
    score.human++;
  } else {
    console.log(
      `Eu ganhei! Eu escolhi ${ComputerChoice} e você escolheu ${humanChoice}`
    );
    score.computer++;
  }
}

function playGame() {
  let score = {
    human: 0,
    computer: 0,
  };

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection, score);
  }

  if (score.human > score.computer) {
    console.log(
      `Você ganhou! Placar final\n Humano:${score.human} pontos\n Computador:${score.computer} pontos`
    );
  } else if (score.computer > score.human) {
    console.log(
      `Eu ganhei! Placar final\n Computador:${score.computer} pontos\n Humano:${score.human} pontos`
    );
  } else {
    console.log(`Empatamos! A nossa pontuação foi de ${score.human} pontos!`);
  }
}
