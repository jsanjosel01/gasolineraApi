import { addProvincias, addMunicipios, addCombustibles, addGasolineras } from "./modules/addDatos.js";
import { urlProvincias } from "./utils/constants.js";

import { allowBuscar } from "./modules/buscar.js";
import { fetchGasolineras } from "./modules/gasolinera.js";

let provincia = null
let municipio = null
let combustible = null
let open= false

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


// Event listeners, cuando se cambia un valor en el checkbox
// Provincias
provinciasElement.addEventListener('change', () => {
    provincia = provinciasElement.value
    municipio = null
    addMunicipios(municipiosOpcionesElement, provincia)
})
// Municipios
municipiosElement.addEventListener('change', () => {
    municipio = municipiosElement.value
})
// Combustibles
combustiblesElement.addEventListener('change', () => {
    combustible = combustiblesElement.value
})
// Sí esta abierta
openElement.addEventListener('change', () => {
    open = openElement.checked
})



// BUSCAR por filtros
let buscarElement = document.getElementById('buscar')

// por provicias
provinciasElement.addEventListener('change', () => {
    allowBuscar(provincia, municipio, combustible)
    gasolinerasElement.innerHTML = ''
})

// por municipios
municipiosElement.addEventListener('change', () => {
    allowBuscar(provincia, municipio, combustible)
    gasolinerasElement.innerHTML = ''
})

// Combustible
combustiblesElement.addEventListener('change', () => {
    allowBuscar(provincia, municipio, combustible)
    gasolinerasElement.innerHTML = ''
})
// Abiertas
openElement.addEventListener('change', () => {
    gasolinerasElement.innerHTML = ''
})


// Buscar cuando haga click en el btn buscar
buscarElement.addEventListener('click', async () => {
    await fetchGasolineras(municipio, combustible)
    await addGasolineras(gasolinerasElement, municipio, combustible, open)
})