const fichas = ["0_0","0_1","0_2","0_3","0_4","0_5","0_6","1_1","1_2","1_3","1_4","1_5","1_6","2_2","2_3","2_4","2_5","2_6","3_3","3_4","3_5","3_6","4_4","4_5","4_6","5_5","5_6","6_6"];
let player_1_hand = [];
let player_2_hand = [];
let player_3_hand = [];
let player_4_hand = [];
let game = [];
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
function addImages(){
    repartir();
    player_2_hand.forEach((element)=>{
        document.querySelector("#player_2_hand").insertAdjacentHTML("afterend", "<img src='public/hidden.png' alt='hidden'>");
    })
    player_3_hand.forEach((element)=>{
        document.querySelector("#player_3_hand").insertAdjacentHTML("afterend", "<img src='public/hidden.png' alt='hidden'>");
    })
    player_4_hand.forEach((element)=>{
        document.querySelector("#player_4_hand").insertAdjacentHTML("afterend", "<img src='public/hidden.png' alt='hidden'>");
    })
    player_1_hand.forEach((element)=>{
        document.querySelector("#player_1_hand").insertAdjacentHTML("afterend", `<img src="public/${element}.png" alt="${element}">`);
    })
}

function startGame(){
    addImages();
    
}

newGameButton.addEventListener("click", startGame())

/*repartir()
console.log(player_1_hand)
console.log(player_2_hand)
console.log(player_3_hand)
console.log(player_4_hand)*/
