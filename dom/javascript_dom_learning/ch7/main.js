window.onload = function () {
    let para = document.createElement('p')
    let txt1 = document.createTextNode('this is')
    para.appendChild(txt1)
    let emphasis = document.createElement('em')
    let txt2 = document.createTextNode('my')
    emphasis.appendChild(txt2)
    para.appendChild(emphasis)
    let txt3 = document.createTextNode('content')
    para.appendChild(txt3)
    let testDiv = document.getElementById('testDiv')
    testDiv.appendChild(para)
}


