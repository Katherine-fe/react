import { getHeroeById , getHeroesByOwner} from "../../base/08-imp-exp";
import  heroes from "../../data/heroes";

describe('Pruebas en funciones de Heroes',()=>{
    test('debe de retornar un heroe por id',()=>{
       const id=1;
       const heroe = getHeroeById(id);

       const heroeDara = heroes.find(heroe => heroe.id ===id);
       expect(heroe).toEqual(heroeDara);
    })

    test('debe de retornar undefined si heroe no existe',()=>{
        const id=10;
        const heroe = getHeroeById(id);
        expect(heroe).toBe(undefined);
     })

     test('debe de retornar un arreglo con los heroes de DC',()=>{
        const owner='DC';
        const heroe = getHeroesByOwner(owner);
        const heroeData = heroe.filter( (heroe) => heroe.owner === owner );
        expect(heroe).toEqual(heroeData);
     })

     test('debe de retornar un arreglo con los heroes de marvel',()=>{
        const owner='Marvel';
        const heroe = getHeroesByOwner(owner);
        const heroeDat2a = heroe.filter( (heroe) => heroe.owner === owner );
        expect(heroeDat2a.length).toBe(2);
     })

})