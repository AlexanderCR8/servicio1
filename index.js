const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.status(200).send({
      message:'SERVICIO GRUPO '
  })
});
app.listen(PORT, function () {
  console.log('Servidor en el puerto 3000');
});
