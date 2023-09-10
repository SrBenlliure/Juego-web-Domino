const fichas = ["0_0","0_1","0_2","0_3","0_4","0_5","0_6","1_1","1_2","1_3","1_4","1_5","1_6","2_2","2_3","2_4","2_5","2_6","3_3","3_4","3_5","3_6","4_4","4_5","4_6","5_5","5_6","6_6"];

let player_1_hand = [];
let player_2_hand = [];
let player_3_hand = [];
let player_4_hand = [];
let game = [];
const player_1_span = document.querySelector("#player_1_hand");
const player_2_span = document.querySelector("#player_2_hand");
const player_3_span = document.querySelector("#player_3_hand");
const player_4_span = document.querySelector("#player_4_hand");
const game_span = document.querySelector("#game");
const newGameButton = document.querySelector("#newGame");
const passButton = document.querySelector("#pass");
let actualPlayer;
let nextPlayer;
let gameOver = false;

function randomNumber(){
    let number = Math.floor((Math.random()*(27-0+1))+0);
    return number
}
function repartir(){
    let already_used = [];
    let number
    for (i=0 ; i<7 ; i++){
        number = randomNumber();
        if (already_used.includes(number)) i--;
        else {
            already_used.push(number);
            player_1_hand.push(fichas[number]);
        }
    }
    for (i=0 ; i<7 ; i++){
        number = randomNumber();
        if (already_used.includes(number)) i--;
        else {
            already_used.push(number);
            player_2_hand.push(fichas[number]);
        }
    }
    for (i=0 ; i<7 ; i++){
        number = randomNumber();
        if (already_used.includes(number)) i--;
        else {
            already_used.push(number);
            player_3_hand.push(fichas[number]);
        }
    }
    for (i=0 ; i<7 ; i++){
        number = randomNumber();
        if (already_used.includes(number)) i--;
        else {
            already_used.push(number);
            player_4_hand.push(fichas[number]);
        }
    }
}
function updateImages(){
    while (player_2_span.firstChild) player_2_span.removeChild(player_2_span.firstChild);
    player_2_hand.forEach((element)=>{
        player_2_span.insertAdjacentHTML("beforeend", "<img src='public/hidden.png' alt='hidden'>");
    })
    while (player_3_span.firstChild) player_3_span.removeChild(player_3_span.firstChild);
    player_3_hand.forEach((element)=>{
        player_3_span.insertAdjacentHTML("beforeend", "<img src='public/hidden.png' alt='hidden'>");
    })
    while (player_4_span.firstChild) player_4_span.removeChild(player_4_span.firstChild);
    player_4_hand.forEach((element)=>{
        player_4_span.insertAdjacentHTML("beforeend", "<img src='public/hidden.png' alt='hidden'>");
    })
    while (player_1_span.firstChild) player_1_span.removeChild(player_1_span.firstChild);
    player_1_hand.forEach((element)=>{
        player_1_span.insertAdjacentHTML("beforeend", `<img src="public/${element}.png" alt="${element}">`);
    })
    while (game_span.firstChild) game_span.removeChild(game_span.firstChild);
    game.forEach((element)=>{
        game_span.insertAdjacentHTML("beforeend", `<img src="public/${element}.png" alt="${element}">`);
    })
}
function removePreviousGame(){
    player_1_hand = [];
    player_2_hand = [];
    player_3_hand = [];
    player_4_hand = [];
    game = [];
}
function checkMostUsedNumber() {
  
  let counter = {};
  let mostUsedNumber = gameSplit[0];
  let maxRepeats = 1;

  for (let i = 0; i < gameSplit.length; i++) {
    let element = gameSplit[i];

    if (counter[element] == undefined) {
      counter[element] = 1;
    } else {
      counter[element]++;
    }
    if (counter[element] > maxRepeats) {
      maxRepeats = counter[element];
      mostUsedNumber = element;
    }
  }
  return mostUsedNumber;
}
function checkHighestNumber(hand){
    let highestNumber = 0;
    let highestElement;
    hand.forEach((element)=>{
        if (parseInt(element.split("_")[0])>highestNumber) {highestNumber = parseInt(element.split("_")[0]); highestElement = element}
        if (parseInt(element.split("_")[1])>highestNumber) {highestNumber = parseInt(element.split("_")[1]); highestElement = element}
    })
    return highestElement;
}
function startGame(){
    if (player_1_hand.indexOf("6_6")>=0) player_1_hand.splice(player_1_hand.indexOf("6_6"), 1);
    if (player_2_hand.indexOf("6_6")>=0) player_2_hand.splice(player_2_hand.indexOf("6_6"), 1);
    if (player_3_hand.indexOf("6_6")>=0) player_3_hand.splice(player_3_hand.indexOf("6_6"), 1);
    if (player_4_hand.indexOf("6_6")>=0) player_4_hand.splice(player_4_hand.indexOf("6_6"), 1);
    game.push("6_6");
    updateImages();
}
function continueGame(){
    if (player_1_hand.length<7) actualPlayer = player_2_hand;
    if (player_2_hand.length<7) actualPlayer = player_3_hand;
    if (player_3_hand.length<7) actualPlayer = player_4_hand;
    if (player_4_hand.length<7) actualPlayer = player_1_hand;
    return actualPlayer;
}
function player_1_turn(){
    actualPlayer = player_1_hand;
    let valid = [];
    player_1_hand.forEach((element)=>{
    if (element.includes("6")) valid.push(player_1_hand.indexOf(element));
    })
    if (valid.length=0) {
        document.querySelector("#pass").addEventListener("click", ()=>{
            nextPlayer = player_2_hand;
        })
    }
    else {
    valid.forEach((n)=>{
        player_1_span.childNodes[n].classList.add("valida");
    })
    document.querySelectorAll(".valida").forEach((element)=>{
        element.addEventListener("click", (event)=>{
            let player_1_span_array = Array.from(player_1_span.childNodes);
            game.push(player_1_hand[player_1_span_array.indexOf(event.target)]);
            player_1_hand.splice(player_1_span_array.indexOf(event.target), 1);
            updateImages();
            nextPlayer = player_2_hand;
            })
        })
    }
}
function computerTurn(actualPlayer, nextPlayer){
actualPlayer.forEach((element)=>{
    if (element.includes("6")) valid.push(element);
})
let isDouble = false;
let selectedElements1 = [];
valid.forEach((element)=>{
    if (element.split("_")[0] == element.split("_")[1]) {isDouble = true; selectedElements1.push(element)}
})
let gameSplit = [];
game.forEach((element)=>{
    gameSplit.push(element.split("_"));
})
checkMostUsedNumber();
let selectedElements2 = [];
if (selectedElements1) {
    selectedElements1.forEach((element)=>{
        if (element.includes(mostUsedNumber)) selectedElements2.push(element);
    })
}
else valid.forEach((element)=>{
    if (element.includes(mostUsedNumber)) selectedElements1.push(element);
})
let selectedElements3 = [];
if (selectedElements2) {
    checkHighestNumber(selectedElements2);
    selectedElements2.forEach((element)=>{
        if (element.includes(highestElement)) selectedElements3.push(element);
    })
}
else {
    checkHighestNumber(valid);
    valid.forEach((element)=>{
        if (element.includes(highestElement)) selectedElements2.push(element);
    })
}
let selectedElement;
if (selectedElements3) selectedElement = selectedElements3[0];
else if (selectedElements2) selectedElement = selectedElements2[0];
else if (selectedElements1) selectedElement = selectedElements1[0];
else if (valid) selectedElement = valid[0];
game.push(selectedElement);
actualPlayer.splice(actualPlayer.indexOf(selectedElement), 1);
updateImages();
return nextPlayer;
}


function newGame(){
    removePreviousGame();
    repartir();
    updateImages();
    startGame();
    continueGame();
    while (!gameOver){
        player_1_turn();
        computerTurn(player_2_hand, player_3_hand);
        computerTurn(player_3_hand, player_4_hand);
        computerTurn(player_4_hand, player_1_hand);
    }


}
newGameButton.addEventListener("click", newGame);

