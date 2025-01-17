//Importamos el módulo de express
import express from 'express';
import dotenv from 'dotenv';
import cancionRoute from './src/rutas/cancion.ruta.js';
import playlistRoute from './src/rutas/playlist.ruta.js';


//Creamos una instancia de la aplicación express
const app = express();
dotenv.config(); 

const port = process.env.PORT;
app.use(express.json());


app.use(cancionRoute);
app.use(playlistRoute);


// Configuramos el servidor para que escuche en el puerto especificado
// y ejecutamos una función callback que muestra un mensaje en la consola
app.listen(port, () => {
    console.log(`El servidor está activo en el puerto: ${port}`);
});