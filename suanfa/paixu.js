let sort2 = ([a, b]) => a < b ? [a, b] : [b, a]


console.log(sort2.call(null, [3, 6]))



let min = (numbers) => {
    if (numbers.length > 2) {
        return min(
            [numbers[0], min(numbers.slice(1))]
        )
    } else {
        return Math.min.apply(null, numbers)
    }
}


let minIndex = (numbers) => numbers.indexOf(min(numbers))

let sort = (numbers) => {
    if (numbers.length > 2) {
        let index = minIndex(numbers)
        let min = numbers[index]
        numbers.splice(index, 1)
        return [min].concat(sort(numbers))
    } else {
        return numbers[0] < numbers[1] ? numbers : numbers.reverse()
    }
}


console.log(sort([1, 3, 5, 8]))