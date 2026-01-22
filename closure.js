//对let+{}产生块级作用域（词法环境）的理解
function foo(){
    var a = 1
    let b = 2
    {
        let b = 3
        var c = 4
        let d = 5
        console.log(a)
        console.log(b)
    }
    console.log(b)
    console.log(c)
    console.log(d)
}


//2种solution使下列结果打印12345
var arr = []
for(var i = 1;i<=5;i++){
    arr.push(function(){
        console.log(i)
    })
}

//s1
var arr = []
for(let i = 1;i<=5;i++){
    arr.push(function(){
        console.log(i)
    })
}

//s2
var arr = []
for(var i = 1; i<= 5; i++){
    function foo(i){
        arr.push(function(){
            console.log(i)
        })
    }
    foo(i)
}

//s2另一种写法
var arr = []
for(var i =1; i<= 5; i++){
    (function(j){
        arr.push(function(){
            console.log(j)
        })
    })(i)
}

for(var k=0;k<5;k++){
    arr[k]()
}