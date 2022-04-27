let cards = ["🌹", "🌺", "🌻", "🌼", "🏵️", "💮"];
let cards2 = cards.concat(cards);
let shuffled = [];

function shuffle(arr) {
  for (i = 0; i <= arr.length; i++) {
    let counter = Math.floor(Math.random() * arr.length);
    shuffled.push(arr[counter]);
    arr.splice(counter, 1);
    i = 0;
  }
}

let card1 = [];
let cardDone = 0
function flipcard(event) {
  event.target.classList.add("show-card");
  card1.push(event.target);
  for (x of card1) {
    if (card1.length == 2) {
      if (card1[0].innerText == card1[1].innerText) {
        card1.forEach((v) => v.classList.add("success"));
        setTimeout(removeCard, 800);
        cardDone += 1
      } else {
        function notcuplle() {
          card1.forEach((v) => v.classList.remove("show-card"));
          card1 = [];
        }
        setTimeout(notcuplle, 1300);
      }
    }
    if (card1.length > 2) {
      card1.forEach((v) => v.classList.remove("show-card"));
    }
  }
}

function addchild(arr) {
  let board = document.getElementById("game-table");
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
  if(cardDone == 12){
    alert("👏👏👏👏")
}
}


shuffle(cards2);
addchild(shuffled);
