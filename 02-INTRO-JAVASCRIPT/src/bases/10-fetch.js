const apiKey ='BZrQswLDxwddqT6QR8P79N52wcw8ngv3';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apikey=BZrQswLDxwddqT6QR8P79N52wcw8ngv3`);

/* peticion.then(resp => {
    resp.json().then(data => {
        console.log(data);
    })
    
}) */

peticion
    .then(resp => resp.json())
    .then( ({data}) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    })   
    .catch(console.warn)