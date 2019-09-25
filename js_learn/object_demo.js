// 第一题 将数字转换为星期表示

// let arr = [0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 6]
// let arr2 = arr.map(function (num) {
//         if (num === 0) {
//             return '星期日'
//         } else if (num === 1) {
//             return '星期一'
//         } else if (num === 2) {
//             return '星期二'
//         } else if (num === 3) {
//             return '星期三'
//         } else if (num === 4) {
//             return '星期四'
//         } else if (num === 5) {
//             return '星期五'
//         } else if (num === 6) {
//             return '星期六'
//         }
//     }

// )
// console.log(arr2)


// 找出所有大于60的成绩

// let scores = [95, 91, 59, 55, 42, 82, 72, 85, 67, 66, 55, 91]
// let scores2 = scores.filter(
//     x => x > 60
// )
// console.log(scores2)


// 算出所有奇数的和
let scores = [95, 91, 59, 55, 42, 82, 72, 85, 67, 66, 55, 91]
let sum = scores.reduce((sum, item) => {
    if (item % 2 === 1) {
        return sum + item
    }
    return sum
}, 0)
console.log(sum)