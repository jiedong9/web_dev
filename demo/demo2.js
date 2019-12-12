// map

// let unique = (array) => {
//     let newArr = []
//     array.map((e) => {
//         console.log(e)
//             if (!(e in newArr)) {
//                 newArr.push(e)
//             }
//         }
//     )
//     return newArr
// }
// array = [1, 5, 2, 3, 4, 2, 3, 1, 3, 4]
// a = unique(array)
// console.log(a)


//set
let unique = (array) =>{
    return Array.from(new Set(array))
}
array = [1, 5, 2, 3, 4, 2, 3, 1, 3, 4]
a = unique(array)
console.log(a)