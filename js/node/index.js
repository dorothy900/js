//启动一个服务
const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(200,{
            'Content-Type':'text/html;charset=utf-8'
        })
        res.end('hello world');
    }
    if(req.url == '/user'){
       let data = fs.readFileSync('./db.json','utf-8');
       res.writeHead(200,{
           'Content-Type':'application/json;charset=utf-8'
       })
       res.end(data);
    }
})

server.listen(3000,() => {
    console.log('服务启动成功');
})


