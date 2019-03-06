import { fstat } from "fs";

//key字段指明HTTPS服务器使用的私钥
//cert字段指明HTTPS服务器使用的公钥
const options = {
    key:fs.readFileSync('ssl/default.key'),
    cert:fs.readFileSync('ssl/default.cer')
}
//HTTPS服务器可以根据域名，给不同域名提供不同证书

server.addContext('xxx.com',{
    key:'xxx',
    cert:'yyy'
})

//在客户端发起HTTPS请求几乎和HTTP相同
//但是https服务器如果SSL证书是自制的，https模块会提示安全问题
//options加入 rejectUnauthorized:false 使用资质证书