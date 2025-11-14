console.log('prueba');
import { urlProvincias } from "../utils/constants.js";

// Funcion asíncrona
export async function fetchProvincias() {
    const res = await fetch(urlProvincias);
    const data = await res.json();
    //Mostrar en Consola
    console.log(data); 
    return data;
}

