import addLoadEvent from "./addLoadEvent"

let dispalyAbbreviations = () =>{
    if (!document.getElementsByTagName || !document.createElement ||!document.createTextNode) return false
    let abbreviations = document.getElementsByTagName('abbr'), defs
    console.log(abbreviations)
    if (abbreviations.length < 1) return false
    defs = []
    for (let i = 0;i<abbreviations.length;i++){
        let definition = abbreviations[i].getAttribute('title')
        console.log(definition)
        let key = abbreviations[i].lastChild.nodeValue
        defs[key] = definition
        console.log(defs)
    }
    let dlist = document.createElement('dl')
    for(let key in defs){
        let definition = defs[key]
        let dtitle = document.createElement('dt')
        let dtitle_text = document.createTextNode(key)
        dtitle.appendChild(dtitle_text)
        let ddesc = document.createElement('dd')
        let ddesc_text = document.createTextNode(definition)
        ddesc.appendChild(ddesc_text)
        dlist.appendChild(dtitle)
        dlist.appendChild(ddesc)
    }
    let header = document.createElement("h2")
    let header_text = document.createTextNode('abbreviations')
    header.appendChild(header_text)
    document.body.appendChild(header)
    document.body.appendChild(dlist)

}
addLoadEvent(dispalyAbbreviations)

//page133