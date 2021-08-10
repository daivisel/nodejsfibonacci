
const express = require("express");
const app = express();

app.get('/numero', function(req, res) {
  const fibo = req.query.fibo;
  var i;
  var z;
  var fib = [];
  const resultado = [];
  fib[0] = 0;
  fib[1] = 1;
  for (i = 2; i <= fibo; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    //console.log(fib[i]);
    resultado[i]=fib[i];
    }
  res.send({
   resultado
  });

});

app.listen(8080);
console.log('Server started at http://localhost:' + 8080);

