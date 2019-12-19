let foo = function () {
    let a = 3, b = 5
    let bar = function () {
        let b = 7, c = 11
        a += b + c
    }
    bar()
    console.log(a)
}
foo()