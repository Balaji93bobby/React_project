// // 1st method accessing the elemt fomr js

// console.log(document.querySelector('#heading'))
// document.querySelector('#heading').innerHTML += 'Asap Frontend'

// // 2nd method

// console.log(document.getElementById('heading'))

// document.querySelector('#heading').style.color = 'red'



// function changeButtonToGreen(){
//     document.querySelector('button').style.backgroundColor = 'green'
//     document.querySelector('#heading').style.backgroundColor = 'black'
// }

// change class names using js

function toggleSidebar(){
    document.querySelector('body').classList.toggle('open')
}


