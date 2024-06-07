// Variabelen voor de span elementen
const computerOutput = document.querySelector("#computer");
const humanOutput = document.querySelector("#human");
const resultOutput = document.querySelector("#result");

// Variabelen voor de knoppen
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

// Variabele voor de keuze van de speler
let humanChoice;

// Functie om de keuze van de computer te genereren
function getComputerChoice() {
    const choices = ["Steen", "Papier", "Schaar"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Functie om de winnaar te bepalen
function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Gelijkspel";
    } else if (
        (humanChoice === "Steen" && computerChoice === "Schaar") ||
        (humanChoice === "Papier" && computerChoice === "Steen") ||
        (humanChoice === "Schaar" && computerChoice === "Papier")
    ) {
        return "Je wint!";
    } else {
        return "Je verliest!";
    }
}

// Callback functies voor de knoppen
function rockButtonClickHandler(event) {
    humanChoice = "Steen";
    playGame(humanChoice);
}

function paperButtonClickHandler(event) {
    humanChoice = "Papier";
    playGame(humanChoice);
}

function scissorsButtonClickHandler(event) {
    humanChoice = "Schaar";
    playGame(humanChoice);
}

// Event listeners voor de knoppen
rockButton.addEventListener("click", rockButtonClickHandler);
paperButton.addEventListener("click", paperButtonClickHandler);
scissorsButton.addEventListener("click", scissorsButtonClickHandler);

// Functie om het spel te spelen
function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(humanChoice, computerChoice);

    // Update de HTML inhoud van de span elementen
    humanOutput.innerHTML = humanChoice;
    computerOutput.innerHTML = computerChoice;
    resultOutput.innerHTML = result;
}
