array = [1,5,2,3,4,2,3,1,3,4]

newAarray = []
for (let i=0;i<array.length;i++){
    console.log(array[i])
    if (!(array[i] in newAarray)){
        newAarray.push(array[i])
    }
}
console.log(newAarray)
