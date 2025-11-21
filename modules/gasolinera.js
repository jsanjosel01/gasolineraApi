// import { urlProvincias, urlMunicipiosParcial } from "./utils/constants.js";
 import { urlProvincias, urlMunicipiosParcial, urlCombustiblesParcial, urlGasolinerasParcial, urlGasolinerasFechaParcial } from "../utils/constants.js"

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

// Gasolineras
export async function fetchGasolineras(IDMunicipio, IDProducto){
    let dataJSON = await fetch(urlGasolinerasParcial + IDMunicipio + "/" + IDProducto)
    let data = await dataJSON.json()
    console.log(data)
    console.log(data.ListaEESSPrecio)
    return data
}

// Gasolineras por fecha
export async function fetchGasolinerasFecha(fecha, IDMunicipio, IDProducto){
    let dataJSON = await fetch(urlGasolinerasFechaParcial + fecha + "/" + IDMunicipio + "/" + IDProducto)
    let data = await dataJSON.json()
    console.log(data)
    console.log(data.ListaEESSPrecio)
    return data
}