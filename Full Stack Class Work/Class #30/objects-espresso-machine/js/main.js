//Create an espresso machine class that makes machines with 4 properties and 3 methods
class Espresso{
    constructor (machineColor, coffeeHandle, amountOfCoffee, sizeOfCup) {
        this.color = machineColor
        this.handle = coffeeHandle
        this.coffee = amountOfCoffee
        this.cup = sizeOfCup
    }
    brew() {
        alert('coffee is made')
    }
    warmUp() {
        alert('water is getting hot')
    }
    finished() {
        alert('drink up')
    }    
}
let myCoffee = new Espresso('black', 'big', 'double espresso', '12oz')