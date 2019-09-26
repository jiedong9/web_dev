// 具名函数
// function sum(x, y) {
//     console.log(x + y)
//     return x + y
// }
// sum(1, 4)

//匿名函数

// let fn = function (x, y) {
//     console.log(x + y)
//     return x + y
// }
// fn(1, 6)

// 箭头函数
// let f1 = x => x * x

// console.log(f1(2))

// let f2 = (x, y) => x + y
// console.log(f2(2, 8))

// let f3 = (x, y) => {
//     console.log(x + y);
//     return x + y
// }
// f3(2, 9)

// let f4 = (x, y) => ({
//     name: x,
//     age: y
// })
// console.log(f4('dong', 18))


//构造函数
// let f5 = new Function('x', 'y', 'return x-y')
// console.log(f5(5, 8))

// 函数的调用时机
// let a = 1

// function fn() {
//     setTimeout(() => {
//         console.log(a)
//     }, 0)
// }
// fn()
// a = 2

// let i = 0
// for (i = 0; i < 6; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0)
//     // console.log(i)
// }


// let i = 0
// do {
//     console.log(i)
//     i++
// } while (i < 6)

! function () {
    let i = 0
    while (i < 6) {
        i++
        console.log(i)
    }

}()


// 函数作用域
// function f1() {
//     let a = 1

//     function f2() {
//         let a = 2

//         function f3() {
//             console.log(a)
//         }
//         a = 22
//         f3()
//     }
//     console.log(a)
//     a = 100
//     f2()
// }
// f1()

//形式参数
// function add(x, y) {
//     console.log(x + y)
//     return x + y
// }

// add(1, 4)

// function add() {
//     var x = arguments[0]
//     var y = arguments[1]
//     console.log(x + y)
//     return x + y
// }

// add(1, 4)


// 返回值

// function hi() {
//     return console.log('hi')
// }

// hi()

// 递归函数


// console.log(f(4))

// function f(n) {
//     return n !== 1 ? n * f(n - 1) : 1
// }

// let person = {
//     name: 'axi',
//     sayHi() {
//         console.log('你好，我叫' + this.name)
//     }
// }
// person.sayHi.call(person)


// function add(x, y) {
//     console.log(x + y)
//     return x + y
// }
// add.call(undefined, 1, 2)
// add(1, 2)
// add.apply(undefined, [1, 3])



// Array.prototype.forEach2 = function(fn){
//     for(let i = 0;i<this.length;i++)
//     {fn(this[i],i,this)}
// }

// this绑定
// function f1(p1, p2) {
//     console.log(this, p1, p2)
// }

// let f2 = f1.bind({
//     name: 'frank'
// })
// f2()
// f1.call({
//     name: 'frank'
// })

// let f3 = f1.bind({
//     name: 'frank'
// }, 'hi')
// f3()


// 立即执行函数
// ! function () {
//     console.log('hi')
// }()