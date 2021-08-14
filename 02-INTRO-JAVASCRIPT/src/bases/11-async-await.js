/* const getImagenPromesa = () => {
    const promesa = new Promise (( resolve , reject) => {
        resolve('')
    })
} */



const getImagen = async() => {
try {
    const apiKey ='BZrQswLDxwddqT6QR8P79N52wcw8ngv3';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?apikey=BZrQswLDxwddqT6QR8P79N52wcw8ngv3`);
   
    const {data} = await resp.json();
    const {url } = data.images.original;
    const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
        
} catch (error) {
    console.log(error);
}

   
}

getImagen();