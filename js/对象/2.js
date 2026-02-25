function Person(name,age,gender){
    this.name = name
    this.age = age
    this.gender = gender

}

function Person(name,age,gender){
    var _this = {}
    _this.name = name
    _this.age = age
    _this.gender = gender

    return _this

}
var p1 = Person('zs',18,'male')
console.log(p1)