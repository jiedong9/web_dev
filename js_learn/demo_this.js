let myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.double = function(){
    let sum = add(3,4)
    let that = this
    let helper = function () {
        that.value = add(that.value,that.value)
    }
    helper()``
}
myObject.increment()
console.log(myObject.value)

myObject.increment(2)
console.log(myObject.value)

myObject.double()
console.log(myObject.value)