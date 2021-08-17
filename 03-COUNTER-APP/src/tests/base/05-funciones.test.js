import { getUser, getUserActivo } from "../../base/05-funciones"
import '@testing-library/jest-dom';
describe('Pruebas en 05-funciones',()=>{
    test('getUser debe de retornar un objeto',()=>{
        const userTest = {
            uid:'ABC123',
            username:'El_Papi1502' 
        }
        const user = getUser();
        
        expect(user).toEqual(userTest);
    })

    test('getUserActivo debe de retornar un objeto',()=>{
        const nombre="Juan"
        const userTest2 = {
            uid:'ABC127',
            username:nombre
        }
        const user = getUserActivo(nombre);
        
        expect(user).toEqual(userTest2);
    })

})