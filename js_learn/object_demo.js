// 第一题 将数字转换为星期表示

let arr = [0, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 6]
let arr2 = arr.map((num) => {

        return {
            0: '星期日',
            1: '星期一',
            2: '星期二',
            3: '星期三',
            4: '星期四',
            5: '星期五',
            6: '星期六'
        } [num]
    }

)
console.log(arr2)


// 找出所有大于60的成绩

// let scores = [95, 91, 59, 55, 42, 82, 72, 85, 67, 66, 55, 91]
// let scores2 = scores.filter(
//     x => x > 60
// )
// console.log(scores2)


// 算出所有奇数的和
// let scores = [95, 91, 59, 55, 42, 82, 72, 85, 67, 66, 55, 91]
// let sum = scores.reduce((sum, n) => {
//     return (n % 2 === 1) ? sum + n : sum
// }, 0)
// console.log(sum)