// *Variables*
// Create a variable and console log the value
let apple = 10
console.log(apple)
// Create a variable, add 10 to it, and alert the value
apple = apple + 10
alert(apple)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFour(nm1,nm2,nm3,nm4) {
    let difference = nm1 - nm2 - nm3 - nm4
    alert(difference) 
}
subtractFour(100, 10, 20, 40)
// Create a function that divides one number by another and returns the remainder
function divides(num1,num2) {
    return num1 % num2
}
console.log(divides(100, 40))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function practice(mu1,mu2){
    let total = mu1 + mu2
    if(total>50){
        alert('Jumanji')
    } else{
        alert('nooo good')
    }
}
practice(30,10)
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplys(muw1,muw2,muw3){
    let tots = muw1 * muw2 * muw3
    let product = tots % 3
    if(product == 0){
        alert('ZEBRA')
    } else{
        alert('nooo bueno')
    }
}
multiplys(4,1,16)
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function multiply(){
    for(let i = 1; i < 15; i++){
        console.log(' loopsaregreatttt')
    }
}
multiply()