describe('Pruebas en el archivo demo.test.js', () =>{
    test('deben de ser iguales los string', () => {       
        //1. inicializacion
        const mensaje = 'HOLA MUNDO';
        //2. estimulo
        const mensaje2="HOLA MUNDO";
        //3.Observar el comportamiento
        expect(mensaje).toBe(mensaje2)
        })
});


