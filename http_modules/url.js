const url = require('url')

//parse方法，将URL字符串装换位URL对象
const u = url.parse('https://www.kancloud.cn/kancloud/seven-days-nodejs/43588')
console.log(u)

//parse也可以解析不完整url，比如request对象的url

//format方法将一个URL对象转换为url字符串
const u1 = url.format({
    protocol: 'http:',
    host: 'www.example.com',
    pathname: '/p/a/t/h',
    search: 'query=string'
});
console.log(u1)

//resolve方法用于拼接字符串

//querystring 用于实现URL参数字符串与参数对象的互相转换