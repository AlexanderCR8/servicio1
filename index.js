'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.json({

   "mensaje": [
        {
                "msg": "Servicio grupo 1"
              
        }
   ]

});
});

app.listen(PORT, function () {
  console.log('Servidor en el puerto 3000');
});
