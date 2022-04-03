// *Variables*
// Create a variable and console log the value
let total = 10
console.log(total)
// Create a variable, add 10 to it, and alert the value
total = total + 10
alert(total)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function minusfour(num1, num2, num3, num4) {
    const product = num1-num2-num3-num4
    alert(product)
}

minusfour(20, 3, 6, 5)
// Create a function that divides one number by another and returns the remainder
function divides(nu1, nu2) {
    return nu1 / nu2
}

console.log(divides(50, 10))
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function math(nm1, nm2) {
    const total = nm1 + nm2
    if(total > 50) {
        alert("jumanji")
    } else {
        alert("negative")
    }
}
math(40, 20)

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function hard(m1, m2, m3) {
    let sum = m1 * m2 * m3
    sum = sum % 3
    if(sum == 0) {
        alert("ZEBRA")
    } else {
        alert("not zebra")
    }
}
hard(6, 10, 1)