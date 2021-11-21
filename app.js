// Requiero express
const express = require("express");

// Requiero cors
const cors = require("cors");

// Inicializo express y creo un puerto
const app = express();
const PORT = 3000;

// Declaro que voy a recibir objetos json
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

// Uso el middleware de cors
app.use(cors());

// Endpoint usuarios ACÁ DA ERROR
app.use("./users", userRoutes);

// Levanto el servidor
app.listen(PORT, function () {
    console.log(`Corriendo en el puerto ${PORT}`);
});


