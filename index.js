const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send({
      message:'SERVICIO GRUPO 5'
  })
});
var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number, function () {
  console.log('Servidor en el puerto 3000');
});
