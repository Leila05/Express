import { faker } from "@faker-js/faker";

function generarCancion() {
    return {
        id: faker.string.uuid(),
        titulo: faker.lorem.words(3),
        artista: faker.name.fullName(),
        album: faker.lorem.words(2),
        duracion: `${faker.number.int({ min: 2, max: 5 })}:${faker.number.int({ min: 10, max: 59 })}`,
        genero: faker.music.genre(),
        fechaLanzamiento: faker.date.past(10).toISOString(),
    };
}

export default generarCancion;