// let array = [`Apples`, `bananas`, `Eggs`, `Milk`]

// // array.forEach(fruit => {
// //     console.log(fruit)
// // })

// for (i = 0; i < array.length; i++){
//     console.log(array[i])
// }

// array.push(`cheese`)

// let filteredArray = array.filter((element) => {
//     console.log(element)
//     return true
// })

// console.log(filteredArray)


// const price = [10,15,20,25,30,35]
// let lowPrice = []

// // let lowPrice = price.filter((element) => {
// //     console.log(element);
// //     return element <= 15
// // })
// // const lowerPrices = (prices) => {
// //     for (i = 0; i < price.length; i++){
// //         if (price[i] <= prices){
// //             lowPrice.push(price[i])
// //         }
// //     }
// // }

// // lowerPrices(25)
// // console.log(lowPrice)

// let correctprice = price.filter((prices) => prices <= 25);

// console.log(correctprice)
// let array = [ 1,2,3,4,5]

// let newArray = array.map((element) => 'hello world')  

// console.log(newArray)

let usDollars = [10,20,30,40]

// let ausDollars = usDollars.map((dollar) => console.log(dollar * 1.5))

// console.log(ausDollars)
let ausDollars = []

for (dollar of usDollars){
    ausDollars.push(dollar * 1.5)
}

console.log(ausDollars)