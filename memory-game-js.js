// let cards = ["🌹", "🌺", "🌻", "🌼", "🏵️", "💮"];
let cards = []
let shuffled = [];
let players = []
let board = document.createElement("div");
board.id = "game-table"

let cardNumReasult ;

function craetPlayer(playerNum, playerName,score) { // יוצרת את השחקן
  return {
    playerNum,
    playerName,
    score,
  }
}

function numberOfCards(){ // יוצרת מקום לכתיבת מספר הזוגות, טקסט וכפתור
let cardNum = document.createElement("input")
let message = document.createElement("span")
let $btn = document.createElement("button")
message.innerText = `       Welcome to the memory-game!
       How many pairs you want (max-26)?`
message.id = "message"
cardNum.type = "number"  
cardNum.id ="numcheck"
cardNum.max = 26
cardNum.min = 1
$btn.innerText = "click"
$btn.id = "btn"
document.body.appendChild(cardNum);
document.body.appendChild(message);
document.body.appendChild($btn);

deleteNumberOfPlayers()
}
function format(input){
  if(input.value.length === 1){
    input.value = "0" + input.value;
  }
}
numberOfCards()

function deleteNumberOfPlayers(){ // שומרת את מספר הכרטיסים במשתנה ומוחקת את האלמנטים הנל
  let cardNum = document.getElementById("numcheck")
  let message = document.getElementById("message")
  let $btn = document.getElementById("btn")
  cardNum.addEventListener("input",function(event){
    cardNumReasult =  event.target.valueAsNumber
    })
  $btn.addEventListener("click",function(event){
    document.body.removeChild(cardNum)
    document.body.removeChild(message);
    document.body.appendChild(board);
    addCards()
  })
}

  function addCards(){ // יוצרת מערך של כרטיסים בהתאם למה שהמשתמש בחר ומתחילה לבנות את כל המשחק
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for(let i=0; i<cardNumReasult; i++){
      cards.push(alphabet[i])
    }
    let cards2 = cards.concat(cards);
    shuffle(cards2);
    addPlayersToBoard();
    addchild(shuffled);
    
}
let numberPlayers = (prompt(`Welcome to the memory-game!
How many pepole want to play?`))
let i = -1
function addNewplayer() {
  let playerNum;
  for(i ; i< numberPlayers; i++){
    i++
    playerNum = i
    break
  }
  let Playername = prompt(`please enter your name: `)
  let score = 0
  let newPlayer = craetPlayer(playerNum, Playername, score);
  players.push(newPlayer);
  return newPlayer;
}

for(let i = 0; i< numberPlayers; i++){
  addNewplayer()
}

function addPlayersToBoard() {
  players.forEach((v) => {
    let p = document.createElement("div");
    p.className = "players";
    p.id = v.playerNum;
    p.innerText = `${v.playerName}
    ${v.score}`;
    document.body.appendChild(p);
    let elem = document.getElementById(players[0].playerNum);
    elem.className = "turn";
  });
}

function shuffle(arr) {
  for (i = 0; i <= arr.length; i++) {
    let counter = Math.floor(Math.random() * arr.length);
    shuffled.push(arr[counter]);
    arr.splice(counter, 1);
    i = 0;
  }
}

let currentPlayer = players[0];
let card1 = [];
let cardDone = 0;
function flipcard(event) {
  if (card1.length <= 2) {
    event.target.classList.add("show-card");
    card1.push(event.target);
  }
  // if(card1.length < 2){
  if (card1.length == 2) {
    if (card1[0].innerText == card1[1].innerText) {
      card1.forEach((v) => v.classList.add("success"));
      setTimeout(removeCard, 1000);
      currentPlayer.score += 1;
      let updateScore = document.getElementById(currentPlayer.playerNum);
      updateScore.innerText = `${currentPlayer.playerName}
        ${currentPlayer.score}`;
      setTimeout(winner, 1500);
    } else {
      function notcuplle() {
        card1.forEach((v) => v.classList.remove("show-card"));
        card1 = [];
      }
      setTimeout(notcuplle, 1000);
    }
    setTimeout(changeplayer, 1000);
  }
  if (card1.length > 2) {
    card1.forEach((v) => v.classList.remove("show-card"));
  }
}

function addchild(arr) {
  for (x of arr) {
    let elem = document.createElement("div"); // הגדרה של הכרטיס שלנו שהוא אובייקט
    elem.innerText = x;
    elem.className = "card";
    elem.onclick = flipcard;
    board.appendChild(elem);
  }
}

function removeCard() {
  card1.forEach((v) => v.classList.add("remove-all-styles"));
  card1 = [];
}
let c = 0
function changeplayer() {
  changeTurn();
  for(c++; c<numberPlayers;){
    currentPlayer = players[c];
    let elem = document.getElementById(players[c].playerNum);
    elem.className = "turn";
    break
  }
  if(c >= numberPlayers) {
    changeTurn();
    c=0
      currentPlayer = players[c];
      let elem = document.getElementById(players[c].playerNum);
      elem.className = "turn";
  }
}

function changeTurn() {
  let elem = document.getElementById(currentPlayer.playerNum);
  elem.classList.remove("turn");
  elem.classList.add("players");
}

function winner() {
  let totalScore = 0;
  players.filter((v) => (totalScore += v.score));
  if (totalScore == cardNumReasult) {
    changeTurn(); 
    let winnerText = document.createElement("div");
    winnerText.className = "winnerText";
    let playersScore = players.map(v => v.score)
    let bastScore = Math.max.apply(null, playersScore);
    let winners = players.filter(v=> v.score == bastScore)
    let winnersName = winners.map(v=> v.playerName)
    if(winnersName.length < 2){
        winnerText.innerText = `The winner is ${winnersName}`;
        board.appendChild(winnerText)
        // setTimeout(startAgain,1000)
        
    }
    else{
      winnerText.innerText = `The winners are ${winnersName}`;
      board.appendChild(winnerText)
    }
  }

}

// function startAgain(){
//   card1 = []
//   players = []
//   shuffle(cards2);
//   addPlayersToBoard();
//   addchild(shuffled);
// }

    // shuffle(cards2);
    // addPlayersToBoard();
    // addchild(shuffled);