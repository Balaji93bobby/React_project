// functions

// function greetuser(name){
//     console.log(`Hello ${name}`)
// }

// const names = [`balaji`, `john`, `peter`];
// // calling the functions
// for (const name of names){
//     greetuser(name)
// }

// function main(){
//     return true
//     console.log(`hello world`)
// }

// console.log(main())

// function sum(num1, num2){
//     return num1 + num2
// }

// console.log(sum(5,10))

// function convertAudToUsd(currency){
//     return ` the value of the AUD ${currency} is ${currency * 1.5} US Dollars` 
// }

// console.log(convertAudToUsd(1000))

// arrow function

const convertAudToUsd = (currency) => {
    return `the value of the AUD ${currency} is ${currency * 1.5} US Dollars`
}

console.log(convertAudToUsd(1000))