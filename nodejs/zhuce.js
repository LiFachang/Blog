const http = require('http');
const querystring = require('querystring');
const mysql = require('mysql');


const server = http.createServer((req, res) => {
  if (req.url != '/favicon.ico') {
    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    let postVal = '';
    req.on('data', (chunk) => {
      postVal += chunk;
    });
    req.on('end', () => {
      let formVal = querystring.parse(postVal);
      let userName = formVal.userName;
      let userPwd = formVal.userPwd;
      console.log(userName);
      console.log(userPwd);


      const connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'lfc3.14159',
        database : 'lifachang',
        port     : '3306'
      });
      connection.connect();
      connection.query('insert into users value (?, ?, ?)', [0, userName, userPwd], (err, results, fields) => {
        if (err) throw err;
        res.write('注册成功');
        res.end()
      });
      connection.end();

    })
  }
}).listen(8888, '127.0.0.1')
