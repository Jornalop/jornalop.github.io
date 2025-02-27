let choice =["piedra", "papel", "tijera"]
let humanScore = 0;
let computerScore = 0;
let piedra = document.querySelector(".piedra");
let papel = document.querySelector(".papel");
let tijera = document.querySelector(".tijera");

let body = document.querySelector("body");
let humanS = document.querySelector(".humanScore");
let computerS = document.querySelector(".computerScore");
let result = document.querySelector(".game");
let buttons = document.querySelector(".buttons");
let restart = document.querySelector("#restart");
let weapon = document.querySelectorAll(".weapon");


weapon.forEach(button => {
    button.addEventListener('click', playRound);
});

function darkMode(){
    body.style.backgroundColor = "#11021c";
}

function playRound(e){
    let computerChoice = Math.floor(Math.random()*3);
    let humanChoice = e.currentTarget.id;
    result.classList.remove("disabled");
    
    if (computerChoice === 0){
        computerChoice = "piedra";
    } else if (computerChoice === 1){
        computerChoice = "papel";
    } else if (computerChoice === 2){ 
        computerChoice = "tijera";
    }
    
    if(
        (humanChoice === "piedra" && computerChoice === "tijera") ||
        (humanChoice === "tijera" && computerChoice === "papel") ||
        (humanChoice === "papel" && computerChoice === "piedra")
    ){
        humanWin();
    } else if (
        (computerChoice === "piedra" && humanChoice === "tijera") ||
        (computerChoice === "tijera" && humanChoice === "papel") ||
        (computerChoice === "papel" && humanChoice === "piedra")
    ){
        computerWin();
    } else {
        draw();
    }

    if (humanScore === 5 || computerScore === 5){
        if(humanScore === 5){
            result.textContent = "👏 GANASTE EL JUEGO 👏";
        } 
        
        if (computerScore === 5){
            result.textContent = "😢 PERDISTE EL JUEGO 😢";
        }
        
        buttons.classList.add("disabled");
        restart.classList.remove("disabled");
        restart.addEventListener("click", restartGame);
    }
}

function humanWin(){
    humanScore++;
    humanS.textContent = "Tú: " + humanScore;
    result.textContent = "GANASTE 😁"
}

function computerWin(){
    computerScore++;
    computerS.textContent = "Rival: " + computerScore;
    result.textContent = "PERDISTE 😔"
}

function draw(){
    result.textContent = "EMPATE 🤝";
}

function restartGame(){
    restart.classList.add("disabled");
    buttons.classList.remove("disabled");
    
    humanScore = 0;
    computerScore = 0;
    
    humanS.innerText = "Tú: " + humanScore;
    computerS.innerText = "Rival: " + computerScore;
    result.classList.add("disabled")
}















// function getComputerchoice(){
//     let number = Math.floor(Math.random()*3);
//     let choiceComputer = "";
//     if (number === 0){
//         choiceComputer = "piedra";
//     } else if (number === 1){
//         choiceComputer = "papel";
//     } else  
//         choiceComputer = "tijera";
//     console.log("¡El rival eligió: " + choiceComputer + "!");
//     return choiceComputer;
// }


// piedra.addEventListener('click', () => {
//     choiceHuman = "piedra";
//     choiceComputer = getComputerchoice();
//     playRound(choiceHuman, choiceComputer);
//     humanS.textContent = "Tú: " + humanScore;
//     computerS.textContent = "Rival: " + computerScore;
// });
// papel.addEventListener('click', () => {
//     choiceHuman = "papel";
//     choiceComputer = getComputerchoice();
//     playRound(choiceHuman, choiceComputer);
//     humanS.textContent = "Tú: " + humanScore;
//     computerS.textContent = "Rival: " + computerScore;
// });
// tijera.addEventListener('click', () => {
//     choiceHuman = "tijera";
//     choiceComputer = getComputerchoice();
//     playRound(choiceHuman, choiceComputer);
//     humanS.textContent = "Tú: " + humanScore;
//     computerS.textContent = "Rival: " + computerScore;
// });


// function playRound(choiceHuman, choiceComputer){
//     choiceComputer = choiceComputer.toLowerCase();
//     if(humanScore < 5 || computerScore < 5){
//         if (humanScore === 5){
//             return result.textContent = "GANASTE";
//         } else if (computerScore === 5){
//             return result.textContent = "PERDISTE";
//         } else{
//             if (choiceHuman === "piedra" && choiceComputer === "tijera"){
//                 console.log("¡Has ganado!");
//                 return humanScore++;
//             } else if (choiceHuman === "papel" && choiceComputer === "piedra"){
//                 console.log("¡Has ganado!");
//                 return humanScore++;
//             } else if (choiceHuman === "tijera" && choiceComputer === "papel"){
//                 console.log("¡Has ganado!");
//                 return humanScore++;
//             } else if(choiceHuman === "piedra" && choiceComputer === "papel"){
//                 console.log("¡Has perdido!");
//                 return computerScore++;
//             } else if(choiceHuman === "papel" && choiceComputer === "tijera"){
//                 console.log("¡Has perdido!");
//                 return computerScore++;
//             } else if (choiceHuman === "tijera" && choiceComputer === "piedra"){
//                 console.log("¡Has perdido!");
//                 return computerScore++;
//             } else {
//                 console.log("¡Empate!");
//             }
//         }
//     }    
// };

// console.log(humanScore);
// console.log(computerScore);
// // humanS.textContent = humanScore;
// // computerS.textContent = computerScore;