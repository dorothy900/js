//为什么要有this？
///经过this改进后的函数链条更加优雅
function identify(){
    return this.name.toUpperCase()
}

function speak(){
    var greating = 'hello,I am' + identify.call(this)
    console.log(greeting)
}

var me = {
    name : 'Tom'
}