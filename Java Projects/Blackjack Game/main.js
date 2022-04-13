//different deckid's for the api
let deckId = ''

//getting the deckids
fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6')
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
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=4`

  fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        document.querySelector('#whole').style.visibility = 'visible' 
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

  document.querySelector('#hit').addEventListener('click', hitIt)

//Function for the hit button
  function hitIt(){
  //Create a new variable for the hit button to get a new card
    let hitButton = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`
    //fetch the new card      
      fetch(hitButton)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          //determine what card get drawn
          if(document.querySelector('#playerc').style.visibility !== 'visible') {
            document.querySelector('#playerc').src = data.cards[0].image
            document.querySelector('#playerc').style.visibility = 'visible'
          }else if(document.querySelector('#playerd').style.visibility !== 'visible') {
            document.querySelector('#playerd').src = data.cards[0].image
            document.querySelector('#playerd').style.visibility = 'visible'
          }else if(document.querySelector('#playere').style.visibility !== 'visible') {
              document.querySelector('#playere').src = data.cards[0].image
              document.querySelector('#playere').style.visibility = 'visible'
          }else{
            document.querySelector('#playerf').src = data.cards[0].image
            document.querySelector('#playerf').style.visibility = 'visible'
          }
        })
        .catch(err => {
          console.log(`error ${err}`)
        }); 
  }

//Use another button to reset the game
  document.querySelector('#reset').addEventListener('click', fkey)

  function fkey() {
    window.location.reload(true);
  }

//use the stay button to trigger the dealer draw
document.querySelector('#stay').addEventListener('click', dealerDraw)

function dealerDraw() {
  
  let dealerHit = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`

  fetch(dealerHit)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      document.querySelector('#dealera').src = data.cards[0].image
     
      console.log()
  })    
}








}

//Value of face cards
function convertToNum(val) {
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
