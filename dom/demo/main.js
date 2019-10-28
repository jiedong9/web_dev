// 创建新标签
const div = dom.create('<div>newDiv</div>')
console.log(div)

dom.after(test, div)


dom.attr(test, 'title', 'Hi, I am Frank')
const title = dom.attr(test, 'title')
console.log(`title: ${title}`)