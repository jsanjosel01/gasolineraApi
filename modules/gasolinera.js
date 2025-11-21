// import { urlProvincias, urlMunicipiosParcial } from "./utils/constants.js";
 import { urlProvincias, urlMunicipiosParcial, urlCombustiblesParcial } from "../utils/constants.js"

// Provincias 
export async function fetchProvincias(){
    console.log(urlProvincias) //Mostrar en la consola

    let dataJSON = await fetch(urlProvincias)
    let data = await dataJSON.json()
    console.log(data)
    return data
}

// Municipios
export async function fetchMunicipios(IDPovincia){
    let dataJSON = await fetch(urlMunicipiosParcial + IDPovincia)
    let data = await dataJSON.json()
    console.log(data)
    return data
}

// Tipo de combustibles
export async function fetchCombustibles(){
    let dataJSON = await fetch(urlCombustiblesParcial)
    let data = await dataJSON.json()
    console.log(data)
    return data
}