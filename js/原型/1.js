Person.prototype.say = function(){
    console.log(this.name);
}
function Person(){
    this.name = 'zhangsan'
}

const p1 = new Person()
console.log(p1)