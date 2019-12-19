let addLoadEvent = (func) => {
    let oldonload = window.onload
    if (typeof window.onload != 'function') {
        window.onload = func
    } else {
        window.onload = function () {
            oldonload()
            func()
        }
    }
}

export default addLoadEvent