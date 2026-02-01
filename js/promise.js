function xq(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('xq')
            resolve()
        }, 1000);
    })
}

function marry(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('marry')
            resolve()
        }, 1000);
    })
}

function baby(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('baby')
            resolve()
        }, 200);
    })
}

xq().then(
    () =>{
        return marry()
    }
)
.then(
    () => {
    baby()
}
)