const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir los archivos estáticos del build de React
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  // Al navegar, siempre retorna index.html para que React Router (si lo usas) funcione
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
