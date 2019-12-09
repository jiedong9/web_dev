array = [1,5,2,3,4,2,3,1,3,4]

let newArr = array.map((item, i, array) => {
    //item:遍历数组的每一项，i:数组当前项的下标，arr原数组
    console.log(`item---${item}, i---${i}, arr---${array}`)

})
console.log(newArr)