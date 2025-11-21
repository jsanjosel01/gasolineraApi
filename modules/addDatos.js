import { fetchProvincias, fetchMunicipios, fetchCombustibles, fetchGasolineras } from "./gasolinera.js";

// import{intervalsOk} FALTA PONER ESTO, Y LAS FECHA

// Provincia
export async function addProvincias(node) {
    let data = await fetchProvincias()
    node.innerHTML = '<option selected disabled>Seleccione una provincia</option>'
    data.forEach(e => {
        node.append(renderProvincia(e))
    });
}

function renderProvincia(provincia) {
    let optionElement = document.createElement('option')
    optionElement.value = provincia.IDPovincia
    optionElement.innerText = provincia.Provincia
    return optionElement
}


//  Municipio 
export async function addMunicipios(node, IDPovincia) {
    let data = await fetchMunicipios(IDPovincia)
    node.innerHTML = '<option selected disabled>Seleccione un municipio</option>'
    data.forEach(e => {
        node.append(renderMunicipio(e))
    });
}

function renderMunicipio(municipio) {
    let optionElement = document.createElement('option')
    optionElement.value = municipio.IDMunicipio
    optionElement.innerText = municipio.Municipio
    return optionElement
}


// Tipo de combustibles
export async function addCombustibles(node) {
    let data = await fetchCombustibles()
    node.innerHTML = '<option selected disabled>Seleccione un tipo de combustible</option>'
    data.forEach(e => {
        node.append(renderCombustible(e))
    });
}

function renderCombustible(combustible) {
    let optionElement = document.createElement('option')
    optionElement.value = combustible.IDProducto
    optionElement.innerText = combustible.NombreProducto
    return optionElement
}

// Gasolineras
export async function addGasolineras(node, IDMunicipio, IDProducto, open) {
    let data
    node.innerHTML = '<div class=\'cargando\'>Cargando</div>'
    data = await fetchGasolineras(IDMunicipio, IDProducto)

    node.innerHTML = ''
    console.log('Mostrar las gasolineras') //Mostrar tipos de gasolineras

    if (data.ListaEESSPrecio.length > 0) {
        let now = new Date()
        data.ListaEESSPrecio.forEach(e => {
            if (open && !intervalsOk(now, e.Horario)) {
                console.log('Gasolinera cerrada')
            } else {
                console.log('Gasolinera')
                node.append(renderGasolinera(e, now))
            }
        })
    } else {
        node.innerHTML = '<div class=\'cargando\'>No hay resultados</div>'
    }
}

// Se mostrará una lista de gasolineras
function renderGasolinera(gasolinera, fecha) {
    let gasolineraElement = document.createElement('div')
    gasolineraElement.classList.add('gasolinera')
    gasolineraElement.innerHTML = `
        <div class="gasolinera-nombre">Núm Gasolinera: ${gasolinera.IDEESS}, ${gasolinera.Rótulo}</div>
        <div class="gasolinera-direccion">Dirección: ${gasolinera.Dirección}</div>
        <div class="gasolinera-localidad">Localidad: ${gasolinera.Localidad}</div>
        <div class="gasolinera-provincia ">Provincia: ${gasolinera.Provincia}</div>
        <div class="gasolinera-horario ${!intervalsOk(fecha, gasolinera.Horario) ? 'cRed' : ''}">Horario: ${gasolinera.Horario}</div>
        <div class="gasolinera-precio">Precio del combustible: ${gasolinera.PrecioProducto} Euro</div>
    `
    return gasolineraElement
}