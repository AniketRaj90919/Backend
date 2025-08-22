
let http = require('http');
const user = require('./object');


http.createServer(function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(user));
    res.end();
  })
  .listen(8080);
