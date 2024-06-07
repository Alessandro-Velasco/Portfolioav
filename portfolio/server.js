const express = require('express');
const path = require('path');

const app = express();

// Define la carpeta donde se encuentran los archivos estáticos (por ejemplo, PDF)
const publicPath = path.join(__dirname, 'public');

// Configura Express para servir archivos estáticos desde la carpeta 'public'
app.use(express.static(publicPath));

// Inicia el servidor en el puerto 3000 (o el puerto que desees)
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor Express en ejecución en el puerto ${PORT}`);
});
