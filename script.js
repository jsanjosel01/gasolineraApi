import { addProvincias, addMunicipios } from "./modules/addDatos.js";
import { urlProvincias } from "./utils/constants.js";

let provincia = null
let municipio = null

console.log(urlProvincias)

/* Provincias */
let provinciasElement = document.getElementById('provincias')
let provinciasOpcionesElement = document.getElementById('provincias')
addProvincias(provinciasOpcionesElement)

/* Municipio*/ 
let municipiosElement = document.getElementById('municipios')
let municipiosOpcionesElement = document.getElementById('municipios')