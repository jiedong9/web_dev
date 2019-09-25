let scores = [95, 91, 59, 55, 42, 82, 72, 85, 67, 66, 55, 91]
let sum = scores.reduce((sum, n) => {
    return (n % 2 === 1) ? sum + n : sum
}, 0)
console.log(sum)