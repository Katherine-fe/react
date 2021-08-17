// destructuracion
// asignacion desestructurante

const persona = {
    nombre:'Katty',
    edad:45,
    clave:'Ironman' 
}

const { nombre, clave, edad } = persona;

console.log(nombre);
console.log(clave);
console.log(edad);


const retornaPersona = ( {nombre,  edad, clave, rango='Cap'}) => {

     console.log(nombre , edad, clave, rango); 
    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 14.1232,
            lng: -12.1232,
        }
    }
}
const {nombreClave, anios,latlng:{lat,lng}} = retornaPersona(persona);
console.log(nombreClave, anios);
console.log(lat,lng);
