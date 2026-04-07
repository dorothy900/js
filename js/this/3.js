//this究竟代指的什么
//Example 1
var a =3
function foo(){
    var a = 2
    function bar(){
        var a =1
        console.log(this.a);
    }
    bar()
}
foo()

//Example 2
var a = 1
function foo(){
    console.log(this.a)
}
var obj = {
    a:2,
    foo:foo
}
obj.foo()

//Example 3 :报错
var a = 1
function foo(){
    console.log(this.a);
}
var obj={
    a:2,
    foo:foo()
}
obj.foo()
