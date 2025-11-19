// import { urlProvincias, urlMunicipiosParcial } from "./utils/constants.js";
 import { urlProvincias, urlMunicipiosParcial } from "../utils/constants.js"

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
