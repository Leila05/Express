import generarCancion from "../models/canciones.model.js";
import { faker } from "@faker-js/faker";

function obtenerCanciones(req, res) {
    const numeroDeCanciones = faker.number.int({ min: 5, max: 10 });
    const canciones = Array.from({ length: numeroDeCanciones }, () => generarCancion());
    res.json(canciones);
}


export default obtenerCanciones;