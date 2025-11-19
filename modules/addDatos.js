import { fetchProvincias, fetchMunicipios } from "./gasolinera.js";

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