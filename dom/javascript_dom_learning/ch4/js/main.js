function showPic(whichpic) {
    let source = whichpic.getAttribute('href')
    let placeholder = document.getElementById('placeholder')
    placeholder.setAttribute('src', source)
    let text = whichpic.getAttribute('title')
    let description = document.getElementById('description')
    description.firstChild.nodeValue = text
}

function popUp(url) {
    window.open(url,'popup','width=320,height=480')
}
