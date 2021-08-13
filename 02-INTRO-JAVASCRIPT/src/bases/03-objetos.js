const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        domicilio:'av peru',
        trabajo:'word'
    }
};
/* console.table( persona); */

const persona2 ={...persona}
persona2.nombre='Kat'

console.log( persona); 
console.log( persona2); 

