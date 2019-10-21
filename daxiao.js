// 比较两个数字的大小 析构赋值

let minOf2 = ([a, b]) => a < b ? a : b

console.log(minOf2.call(null, [1, 2]))


// 比较三个数中最小的那个
let minOf3 = ([a, b, c]) => {
    return minOf2([minOf2([a, b]), c])
}

console.log(minOf3.call(null, [3, 9, 6]))



let min = (numbers) => {
    if (numbers.length > 2) {
        return min(
            [numbers[0], min(numbers.slice(1))]
        )
    } else {
        return Math.min.apply(null, numbers)
    }
}


console.log(min.call(null, [22, 34, 3, 5, 7, 1, 44, 5, 6, 66]))


// let getMin = numbers => {
//     if (numbers.length <= 2) {
//         return numbers[0] > numbers[1] ? numbers[1] : numbers[0];
//     } else {
//         return getMin([numbers[0], getMin(numbers.slice(1))])
//     }
// }

let getMin = numbers => {
    let len = numbers.length;
    let min = numbers[0]
    for (let i = 1; i < len; i++) {
        min = numbers[i] < min ? numbers[i] : min;
    }
    return min;
}

console.log(getMin.call(null, [22, 34, 3, 5, 7, 1, 44, 5, 6, 66]))