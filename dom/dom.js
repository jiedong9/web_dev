// 创建新的元素
window.dom = {
    create(string) {
        const container = document.createElement('template')
        container.innerHTML = string.trim()
        return container.content.firstChild
    },
    // 下一个元素
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling)
    },
};