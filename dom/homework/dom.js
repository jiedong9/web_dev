window.dom = {
    // 查找
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    // 样式
    style(node, name, value) {
        node.style[name] = value
    },
    // 获取节点的所有元素
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    }
}