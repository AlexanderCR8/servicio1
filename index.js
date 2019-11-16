const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send({
      message:'SERVICIO GRUPO 5'
  })
});

app.listen(3000, function () {
  console.log('Servidor en el puerto 3000');
});
