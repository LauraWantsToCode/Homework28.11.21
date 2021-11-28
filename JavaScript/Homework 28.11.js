console.log("Task 1")
const myArrays = ["Zero", "One", "Two", "Four", 4, "Five"];
console.log(myArrays);

myArrays.push(6);
console.log(myArrays);

console.log(myArrays[3]);
myArrays[3] = "Three";
console.log(myArrays);

myArrays[4] = "Four"
myArrays[6] = "Six"
console.log(myArrays);

console.log("Task 2")
var num1 = window.prompt("Please add the first number")
var num2 = window.prompt("Please add the second number")
const multiplied = num1 * num2
console.log(`You have multiplied number ${num1} with number ${num2} and received ${multiplied}`)
console.log(`The rounded value for the above is ${Math.round(multiplied)}`)

console.log("Task 3")
const correctAnswer = "water"
const secondbest = "tea"
var attempt = window.prompt("Guess what the most popular drink in the world is (lowercase please): ")
    if (attempt == correctAnswer) {
    console.log(`You said ${attempt} and you were correct!`)
    }
    else if (attempt == secondbest) {
    console.log(`You said ${attempt} and guessed the second most popular drink in the world`)
    }
    else
    console.log("You are wrong and brought shame to your family, or your answer was not written in lowercase letters")


console.log("Task 4")

const array0 = [1, 3, 5, 7, 9]; 
    for (let b = 0; b < array0.length; b++) {
        console.log(`Array position ${b} contains ${array0[b]}`); 
    }

