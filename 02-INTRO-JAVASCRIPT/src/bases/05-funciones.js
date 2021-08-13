// Funciones en JS
/*  const saludar = function ( nombre ) {
    return `Hola, ${ nombre}`;
} */

/* const saludar2 = (nombre) => {
    return `Hola, ${ nombre}`; 
}

const saludar3 = () => `Hola Mundo`; */




/* const getUser = () => ({
        uid:'ABC123',
        username:'El_Papi1502' 
}); */

/* console.log(saludar2('Kat'));
console.log(saludar3);
console.log(getUser());
 */

const getUserActivo = (nombre) => ({
        uid:'ABC127',
        username:nombre
});

const usuarioActivo = getUserActivo('Fernando');
console.log(usuarioActivo);