
const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app     = express();
const cors = require('cors');
const fs = require('fs');

console.log('This is after the read call');

app.use(cors({origin: 'http://localhost:3000/'}));
app.get('/', cors(), function(req, res) {
  fs.readFile('info.json', (err, data) => {
    if (err) throw err;
    let info = JSON.parse(data);
    res.send(info);
  });
});

app.listen(process.env.PORT || 8080);
console.log('API is running on http://localhost:8080');
module.exports = app;