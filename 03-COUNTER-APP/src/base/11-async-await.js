export const getImagen = async() => {
    try {
        const apiKey ='BZrQswLDxwddqT6QR8P79N52wcw8ngv3';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?apikey=BZrQswLDxwddqT6QR8P79N52wcw8ngv3`);
    
        const {data} = await resp.json();
        const {url } = data.images.original;
       return url;
            
    } catch (error) {
  return 'No existe';
    }  
}