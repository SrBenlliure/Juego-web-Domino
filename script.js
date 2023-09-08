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
function startGame(){
    

}




function newGame(){
    removePreviousGame();
    repartir();
    updateImages();
    startGame();
}
newGameButton.addEventListener("click", newGame);