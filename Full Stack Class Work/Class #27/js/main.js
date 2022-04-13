//different deckid's for the api
let deckId = ''

//getting the deckids
fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6')
      .then(res => res.json()) 
      .then(data => {
        console.log(data)
        deckId = data.deck_id
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


document.querySelector('#startGame').addEventListener('click', startDeck)

//starting the game
function startDeck(){
  const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`

  fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        //Initial cards
        document.querySelector('#dealera').src = "./img/fixed poker card.png"
        document.querySelector('#playera').src = data.cards[1].image
        document.querySelector('#dealerb').src = data.cards[2].image 
        document.querySelector('#playerb').src = data.cards[3].image
        //Value Calculating
        let dealerVal = convertToNum(data.cards[0].value) + convertToNum(data.cards[2].value)
        let playerVal = convertToNum(data.cards[1].value) + convertToNum(data.cards[3].value)
        //Win, tie, or lose scenerios
        if(dealerVal > playerVal){
          document.querySelector('#result').innerText = 'Dealer Wins'
        }else if(dealerVal < playerVal){
          document.querySelector('#result').innerText = 'You Win!!!'
        }else{
          document.querySelector('#result').innerText = 'Time for War!'
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
//Value of face cards
function convertToNum(val){
  if(val === 'ACE'){
    return 11
  }else if(val === 'KING'){
    return 10
  }else if(val === 'QUEEN'){
    return 10
  }else if(val === 'JACK'){
    return 10
  }else{
    return Number(val)
  }
}
