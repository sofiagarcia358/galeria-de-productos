//una funcion asYnc solo puede ser llamada por otra función async
//ya no utilizar fetch
async function productosAPI(){
    try{
        const response =await  fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        return data;

    }catch(error){console.error("error:",error)
}
    
}
export {productosAPI}