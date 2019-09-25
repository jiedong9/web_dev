<<<<<<< HEAD
// let i
// for (let i = 0; i < 6; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0)
// }
=======
let scores = [95, 91, 59, 55, 42, 82, 72, 85, 67, 66, 55, 91]
let sum = scores.reduce((sum, n) => {
    return (n % 2 === 1) ? sum + n : sum
}, 0)
console.log(sum)
>>>>>>> 16baab73362081f32988e275401f4941a64d3206
