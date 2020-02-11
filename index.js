'use strict'

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.json({

   "mensaje": [
        {
                "msg": "Servicio grupo 1",
                "msg2": "El Estudiante se ha editado correctamente",
                "msg3": "El Estudiante se ha eliminado correctamente",
                "msg4": "Se produjo un problema en la Edición/Eliminación",
                "msg5": "Examen primer hemisemestre",
                "msg6": "Examen Optativa III",
                "msg7": "mensajeExamen",
                "msg8": "Los estudiantes becados no se pueden eliminar"
              
        }
   ]

});
});

app.listen(PORT, function () {
  console.log('Servidor en el puerto 3000');
});
