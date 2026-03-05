function Person(){
    this.name = 'xm'
    this.idcard = '1001'

    //new process
    var obj = {}
    Person.call(obj)
    this.name = 'xm'
    obj.__proto__ = Person.prototype
    return obj
}
const p = new Person()
console.log(p.__proto__.constructor)
console.log(p.constructor)

Student.prototype = new Person()
function Student(){
    this.name ='zs'
}
const s = new Student()
console.log(s.__proto__.constructor)
console.log(s.constructor)
console.log(s.idcard)