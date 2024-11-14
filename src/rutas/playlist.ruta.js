import express from 'express';
import obtenerPlaylists from '../controladores/playlist.controlador.js'

const router = express.Router();
router.get('/playlists', obtenerPlaylists);

export default router;