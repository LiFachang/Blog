const http = require('http');
const url = require('url');
const querystring = require('querystring');


//get
// const server = http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
//   const query = url.parse(req.url, true).query;
//   console.log('--------');
//   console.log(url.parse(req.url));
//   console.log(req.url);
//   console.log(query);
//   res.end('哈哈');
// });

//post
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
  let postVal = '';
  req.on('data', (chunk) => {
    postVal += chunk;
  });
  req.on('end', () => {
    console.log('-------------');
    console.log(querystring.parse(postVal));
    res.end('已接收post')
  })
})
server.listen(8081, '127.0.0.1');
console.log('正在运行服务...');
