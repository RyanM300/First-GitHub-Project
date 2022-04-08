// *Variables*
/* Declare a variable and assign it to a sentance that is a positive affirmation. 
Print the affirmation to the console multiple times using a method*/
let sent = 'I am going to make it through this'
for (i = 0; i <= 5; i++){
    console.log(sent)
}
/*Declare a variable, assign it an array of letters, combine the letters into one word, 
and alert it*/ 
let arr = ['a', 'b', 'c', 'd']
alert(arr.join(''));
/* *Functions*
// Create a function that returns rock, paper, lizard, spock or scissors as randomly 
as possible*/
function game () {
    let ran = Math.random()
    if(ran < .20){
        return 'rock'
    } else if(ran < .40){
        return 'paper'
    }else if(ran < .60){
        return 'lizard'
    }else if(ran < .80){
        return 'spock'
    }else{
        return 'scissors'
    }
}
game()
// *Conditionals*
/*Create a function that takes in a choice (rock, paper, scissors, lizard, or spock) 
and determines if they won a game of rock paper scissors against a bot using the above 
function */

