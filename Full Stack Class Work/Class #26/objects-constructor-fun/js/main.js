//Create a constructor with 4 properties and 3 methods
function MakePizza (pizzaTopping , pizzaSauce, pizzaType, pizzaSize){
    this.pizzaTopping = pizzaTopping
    this.pizzaSauce = pizzaSauce
    this.pizzaType = pizzaType
    this.pizzaSize = pizzaSize

    this.estimatedTime = function(){
        console.log('Calculating....')
    }
    this.burntMouth = function(){
        console.log('MAMMAAA MIA!!!')
    }
    this.frisbee = function(){
        console.log('Heads up loser!')
    }
}
let pizza = new MakePizza('peporni', 'marinara', 'pan', 'yugeee')