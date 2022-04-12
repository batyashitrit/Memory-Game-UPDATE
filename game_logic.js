let cards = ["card1","card2","card3", "card4", "card5","card6","card7","card8"]
let cards2 = cards.concat(cards) 
let shuffled = []

// function shuffle(array) {
//     let shuffled = array
//     shuffled.sort(() => Math.random() - 0.5);
//   }

// shuffle(cards)
// console.log(cards)

function shuffle(arr){
    for(i = 0; i<= arr.length; i++){
    let counter = Math.floor(Math.random()*(arr.length))
        shuffled.push(arr[counter])
        arr.splice(counter,1)
        i = 0   
    }
    }
    
function addchild(arr){
let board = document.getElementById("game-table")    
for(x of arr){
    let elem = document.createElement("div")
elem.innerText = x
board.appendChild(elem)
elem.className = "card"
}
}

shuffle(cards2)
addchild(shuffled)