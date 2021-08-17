export const getUser = () => ({
        uid:'ABC123',
        username:'El_Papi1502' 
}); 



export const getUserActivo = (nombre) => ({
        uid:'ABC127',
        username:nombre
});

const usuarioActivo = getUserActivo('Fernando');
