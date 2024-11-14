import generarPlaylist from "../models/playlist.model.js";
import { faker } from "@faker-js/faker";

function obtenerPlaylists(req, res) {
    const numeroDePlaylists = faker.datatype.number({ min: 3, max: 5 });
    const playlists = Array.from({ length: numeroDePlaylists }, () => generarPlaylist());
    res.json(playlists);
}

export default obtenerPlaylists;