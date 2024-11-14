import { faker } from "@faker-js/faker";
import generarCancion from "./canciones.model.js";

function generarPlaylist() {
    const numeroDeCanciones = faker.datatype.number({ min: 5, max: 20 });
    const canciones = Array.from({ length: numeroDeCanciones }, () => generarCancion());

    return {
        idPlaylist: faker.datatype.uuid(),
        nombre: faker.lorem.words(2),
        descripcion: faker.lorem.sentence(),
        canciones: canciones,
        creador: faker.name.findName(),
        fechaCreacion: faker.date.past(1).toISOString(),
    };
}

export default generarPlaylist;