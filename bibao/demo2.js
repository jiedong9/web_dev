let a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('a成功')
    },1000)
})

let b = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('失败')
    },2000)
})
Promise.race([a, b]).then(res => {
    console.log(res)
},err => {
    console.log(err)
})