const http = require('http')
//http模块 用来建立服务器
// http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text-plain"})
//     res.end("Hello World\n")
// }).listen(8124)

//HTTP请求发送服务器，可以认为是数据流方式
//可以把request对象当作一个只读数据流来访问请求体数据
//例如header，method等数据
// http.createServer((req,res)=>{
//     let body = [];
//     console.log(req.method);
//     console.log(req.headers);

//     req.on('data',(chunk)=>{
//         body.push(chunk)
//     })
//     req.on('end',()=>{
//         body = Buffer.concat(body);
//         console.log(body.toString());
//     })
// }).listen(6000)

//HTTP服务器响应也是一个数据流
//可以将response对象当作一个只写数据流来写入响应体数据
//数据包括header，body，

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    req.on('data',(chunk)=>{
        res.write(chunk)
    });
    req.on('end',()=>{
        res.end();
    })
}).listen(6001)

