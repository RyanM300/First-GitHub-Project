//Create an array of movie titles. Loop through the array add each element to the h2.
let movies = ['head in the game', 'social network', 'happy gilmore']

for(let i = 0; i < movies.length; i++) {
    document.querySelector('h2').innerText += movies[i] 
}

//Create an array of numbers. Loop through the array add three to each number and 
//replace the old number.
let numb = [10, 20, 30]

numb.forEach((item, index) => {
    numb[index] = item + 3
})
console.log(numb)
//Find the average of all the numbers from question three
let total = 0;
for(let i = 0; i < numb.length; i++) {
    total += numb[i];
}
let avg = total / numb.length;
console.log(avg)