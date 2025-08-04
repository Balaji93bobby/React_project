// this is for strings

console.log("this is a console log text")
console.log('this is the' + ' second log')
let string = 'this is the third log'
console.log(string)
console.log(string[1])
console.log(string.length)

//  this is for numbers or integers

console.log(5 + 1) //this is for addition
console.log(5 - 1) // this is for subtraction
console.log(10 % 3) // this outputs the remainder
console.log(9 / 3) // this outputs the quotient
console.log(4 + 7.6) // it can work on floats as well



// let keyword
let name = "balaji"
let num= 32
num = num + 1
console.log(num)

// const keyword

const number = 50

// number = number + 1

console.log(number)

// comparision operators

console.log('6' > 5) // == this only compares the values
console.log('5' !== 5) // === this compares the values along with datatypes


// conditions

let condition = false
let signedIn = true

if (condition === true){
    console.log('login')
}
else if (signedIn === true) {
    console.log('signed in successfull')
}
else {
    console.log('login needed')
}

let age = 21
let hasId = true

if (age >= 18 && hasId ){
    console.log(`You are ${age} years old, you can enter the club`)
}
else if(age === 18){
    console.log(`you are 18 years old welcome`)
}
else{
    console.log(`you are ${age} years old , you are not appropiate to enter the club`)
}


// falsey vlaues

let truth
if (truth){
    console.log(`yes it is true`)
}
else{
    console.log(`no it is not true`)
}

// ternary operators

let isRaining

isRaining ? console.log(`it is raining`) : console.log(`it is not raining`)
