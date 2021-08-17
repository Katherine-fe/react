import { getImagen } from "../../base/11-async-await"

describe('async await fetch', () =>{
    test('debe retornar el url de la imagen', async() =>{
        const url = await getImagen();
        expect(typeof url).toBe('string')
    })
})