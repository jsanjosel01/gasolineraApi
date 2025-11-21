import { addProvincias, addMunicipios, addCombustibles } from "./modules/addDatos.js";
import { urlProvincias } from "./utils/constants.js";

let provincia = null
let municipio = null
let combustible = null

//Mostrar
console.log(urlProvincias)

// Provincias 
let provinciasElement = document.getElementById('provincias')
let provinciasOpcionesElement = document.getElementById('provincias')
addProvincias(provinciasOpcionesElement)

// Municipio
let municipiosElement = document.getElementById('municipios')
let municipiosOpcionesElement = document.getElementById('municipios')
addMunicipios(municipiosOpcionesElement)

// Tipo de combustibles
let combustiblesElement = document.getElementById('combustibles')
let combustiblesOpcionesElement = document.getElementById('combustibles')
addCombustibles(combustiblesOpcionesElement)

// Gasolineras 
let gasolinerasElement = document.getElementById('gasolineras')
let openElement = document.getElementById('open') // ABIERTAS