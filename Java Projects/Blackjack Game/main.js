
//different deckid's for the api
let deckId = ''
let playeraVal = 0
let playerbVal = 0
let playercVal = 0
let playerdVal = 0
let playereVal = 0
let playerfVal = 0
let dealeraVal = 0
let dealerbVal = 0
let dealercVal = 0
let dealerdVal = 0
let dealereVal = 0
let dealerfVal = 0


let playSum = 0
let dealSum = 0
let playScreenCount = [playeraVal, playerbVal, playercVal, playerdVal, playereVal, playerfVal]
let dealScreenCount = [dealeraVal, dealerbVal, dealercVal, dealerdVal, dealereVal, dealerfVal]


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

function convertToNum(val) {
  if(val === 'ACE' && (playSum < 11 || dealSum < 11)) {
    return 11   
  }else if(val === 'ACE'){
    return 1
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

document.querySelector('#startGame').addEventListener('click', startDeck)


//starting the game
function startDeck(){
  const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=3`
  
  fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        document.querySelector('#whole').style.visibility = 'visible' 
        //Initial cards
        document.querySelector('#dealera').src = "./img/fixed poker card.png"
        document.querySelector('#playera').src = data.cards[0].image
        document.querySelector('#dealerb').src = data.cards[1].image 
        document.querySelector('#playerb').src = data.cards[2].image
        playeraVal = data.cards[0].value
        playerbVal = data.cards[2].value
        dealerbVal = data.cards[1].value
        //Value Calculating
        /*let dealerVal = convertToNum(data.cards[0].value) + convertToNum(data.cards[2].value)
        let playerVal = convertToNum(data.cards[1].value) + convertToNum(data.cards[3].value)
        //Win, tie, or lose scenerios
        if(dealerVal > playerVal){
          document.querySelector('#result').innerText = 'Dealer Wins'
        }else if(dealerVal < playerVal){
          document.querySelector('#result').innerText = 'You Win!!!'
        }else{
          document.querySelector('#result').innerText = 'Time for War!'
        } */

        playScreenCount = [playeraVal, playerbVal, playercVal, playerdVal, playereVal, playerfVal]

        first = playScreenCount.map((num) => convertToNum(num))
        console.log(first)

        playSum = first.reduce((partialSum, a) => partialSum + a, 0)


        document.querySelector('#playerCounter').innerText = playSum

         if(playSum === 21){
          document.querySelector('#playerCounter').innerText = '21!!!'
         }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

  document.querySelector('#hit').addEventListener('click', hitIt)
  

  
//Use another button to reset the game
  document.querySelector('#reset').addEventListener('click', fkey)

  function fkey() {
    window.location.reload(true);
  }

     

//Function for the hit button
  function hitIt() {
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
            playercVal = data.cards[0].value
            
            
          }else if(document.querySelector('#playerd').style.visibility !== 'visible') {
            document.querySelector('#playerd').src = data.cards[0].image
            document.querySelector('#playerd').style.visibility = 'visible'
            playerdVal = data.cards[0].value
           
            
          }else if(document.querySelector('#playere').style.visibility !== 'visible') {
              document.querySelector('#playere').src = data.cards[0].image
              document.querySelector('#playere').style.visibility = 'visible'
              playereVal = data.cards[0].value
             
              
          }else{
            document.querySelector('#playerf').src = data.cards[0].image
            document.querySelector('#playerf').style.visibility = 'visible'
            playerfVal = data.cards[0].value
            
          }
          //create a loop to make an array of the values

          playScreenCount = [playeraVal, playerbVal, playercVal, playerdVal, playereVal, playerfVal]

          second = playScreenCount.map((num) => convertToNum(num))
          console.log(second)

          playSum = second.reduce((partialSum, a) => partialSum + a, 0)

          document.querySelector('#playerCounter').innerText = playSum

          if(playSum > 21){
            document.querySelector('#playerCounter').innerText = 'BUST!'
            dealerDraw()
          }else if(playSum === 21){
            document.querySelector('#playerCounter').innerText = '21!!!'
          }


        })   
        .catch(err => {
          console.log(`error ${err}`)
        }); 



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
        dealeraVal = data.cards[0].value

        dealScreenCount = [dealeraVal, dealerbVal, dealercVal, dealerdVal, dealereVal, dealerfVal]
            
        third = dealScreenCount.map((num) => convertToNum(num))
        console.log(third)

        dealSum = third.reduce((partialSum, a) => partialSum + a, 0)

        document.querySelector('#dealerCounter').innerText = dealSum


        setTimeout(function() {
          if(dealSum > 21){
            document.querySelector('#dealerCounter').innerText = 'BUST!'
            document.querySelector('#gameResult').innerText = "You Win!!!"
          }else if(playSum > dealSum){
            document.querySelector('#gameResult').innerText = "You Win!!!"
          }else if(playSum < dealSum ){
            document.querySelector('#gameResult').innerText = "Dealer Wins"
          }else{
            document.querySelector('#gameResult').innerText = "It's a Tie!!!"
          } ;
        }, 500);

        if(dealSum === 21) {
          document.querySelector('#dealerCounter').innerText = '21'
        }else if(dealSum === 17) {
          document.querySelector('#dealerCounter').innerText = dealSum
        }else if(document.querySelector('#playerCounter').innerText === 'BUST!') {
          document.querySelector('#dealerCounter').innerText = dealSum
          document.querySelector('#gameResult').innerText = "Dealer Wins"
        }else if(dealSum > 17) {
          document.querySelector('#dealerCounter').innerText = dealSum
        }else if(dealSum > first){
          document.querySelector('#dealerCounter').innerText = dealSum
        }else {
         //CALL THE FUNCTION AGAIN!!!
          fetch(dealerHit)
            .then(res => res.json())
            .then(data => {
              console.log(data)
              //determine how many cards the dealer draws
              if(document.querySelector('#dealerc').style.visibility !== 'visible') {
                document.querySelector('#dealerc').src = data.cards[0].image
                document.querySelector('#dealerc').style.visibility = 'visible'
                dealercVal = data.cards[0].value
                
              }else if(document.querySelector('#dealerd').style.visibility !== 'visible') {
                document.querySelector('#dealerd').src = data.cards[0].image
                document.querySelector('#dealerd').style.visibility = 'visible'
                dealerdVal = data.cards[0].value
               
              }else if(document.querySelector('#dealere').style.visibility !== 'visible') {
                  document.querySelector('#dealere').src = data.cards[0].image
                  document.querySelector('#dealere').style.visibility = 'visible'
                  dealereVal = data.cards[0].value
                 
              }else{
                document.querySelector('#dealerf').src = data.cards[0].image
                document.querySelector('#dealerf').style.visibility = 'visible'
                dealerfVal = data.cards[0].value
              }
            
              dealScreenCount = [dealeraVal, dealerbVal, dealercVal, dealerdVal, dealereVal, dealerfVal]
            
            
              third = dealScreenCount.map((num) => convertToNum(num))
              console.log(third)

              dealSum = third.reduce((partialSum, a) => partialSum + a, 0)

              document.querySelector('#dealerCounter').innerText = dealSum
            })  
            .catch(err => {
              console.log(`error ${err}`)
            }); 
          }
      })    
    }   
};