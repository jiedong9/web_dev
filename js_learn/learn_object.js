// // 函数方式

// function Person(name, age) {
//     this.name = name
//     this.age = age
// }

// Person.prototype.sayHi = function () {
//     console.log('你好，我叫' + this.name)
// }

// let person = new Person('frank', 18)

// console.log(person.name)
// console.log(person.age)
// console.log(person.sayHi())


// class 方式

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayHi() {
        console.log('你好，我叫' + this.name)
    }
}

let person2 = new Person('jack', 19)
console.log(person2.name)
console.log(person2.age)
console.log(person2.sayHi())