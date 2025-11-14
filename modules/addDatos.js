console.log('prueba');

import { fetchProvincias } from "./gasolineras.js";

// Función asíncrona selecionar provincias
export async function addProvincias(selectElement) {
    const provincias = await fetchProvincias();
    selectElement.innerHTML = '<option selected disabled>Seleccione una provincia</option>';
    provincias.forEach(prov => {
        const option = document.createElement('option');
        option.value = prov.IDPovincia;
        option.textContent = prov.Provincia;
        selectElement.appendChild(option);
    });
}