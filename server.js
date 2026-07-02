const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡El servidor de Capitalis CEO está vivo, bro! 🚀');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo con éxito en el puerto ${PORT}`);
});