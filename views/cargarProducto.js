import { productosAPI } from "../services/api.js";
import { crearProducto } from "../Moduls/productos.js";


async function mostrarProdu(){
    try{
        let datos = await productosAPI();
        console.log(datos);
        console.log("Helooo",productosAPI());
        todosLosproductos(datos);

    }catch(error){console.error("error:",error)}
}
//-----------------------------------------------
function todosLosproductos(datos){

    let Dom = document.querySelector("#root");

    datos.forEach(element => {
        console.log(element)
        Dom.appendChild(crearProducto(element.image, element.price, element.description))
    })

}
export{mostrarProdu}
    
