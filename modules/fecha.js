// Comprueba si la gasolinera está abierta
// Funcion de Intervalok "HORARIO"
export function intervalsOk(nowDate, horario) {
    if (!horario || horario.trim() === "" || horario === "00:00-24:00") return true;

    const nowMinutes = nowDate.getHours() * 60 + nowDate.getMinutes();
    const dias = ['L','M','X','J','V','S','D']; // De lunes a domingo
    const diaActual = dias[nowDate.getDay()];

    const rangos = horario.split(';');

    for (let rango of rangos) {
        let partes = rango.split(':');

        // Horario con días: "L-V:08:00-22:00"
        if (partes.length === 2) {
            const diasRango = partes[0];
            const horas = partes[1].split('-');
            if (horas.length !== 2) continue;

            if (diasRango.includes(diaActual)) { // Dentro del rango
                const [inicio, fin] = horas;
                const [hi, mi] = inicio.split(':').map(Number);
                const [hf, mf] = fin.split(':').map(Number);

                const inicioMinutos = hi * 60 + mi;
                const finMinutos = hf * 60 + mf;

                if (nowMinutes >= inicioMinutos && nowMinutes <= finMinutos) return true;
            }
             // Horario de "08:00-22:00"
        } else if (partes.length === 1) {
            const [inicio, fin] = partes[0].split('-');
            if (!inicio || !fin) continue;

            const [hi, mi] = inicio.split(':').map(Number);
            const [hf, mf] = fin.split(':').map(Number);

            const inicioMinutos = hi * 60 + mi;
            const finMinutos = hf * 60 + mf;

            if (nowMinutes >= inicioMinutos && nowMinutes <= finMinutos) return true;
        }
    }

    return false;
}