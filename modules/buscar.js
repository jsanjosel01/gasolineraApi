// btn buscar gasolinera 
let buscarElement = document.getElementById('buscar')

// Funcion de buscar por filtros la provincia, municipio y gasolina
export function allowBuscar(provincia, municipio, gasolina){
    if(provincia && municipio && gasolina){
        buscarElement.disabled = false
    }else{
        buscarElement.disabled = true
    }

    //Mostrar
    console.log(`provincia ${provincia}`)
    console.log(`municipio ${municipio}`)
    console.log(`combustible ${gasolina}`)
}