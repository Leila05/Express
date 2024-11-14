import express from 'express';
import obtenerCanciones from '../controladores/cancion.controlador.js';

const router = express.Router();

router.get('/canciones', obtenerCanciones);

export default router;