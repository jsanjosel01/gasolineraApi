// Comprueba si la gasolinera está abierta

export function intervalsOk(nowDate, horario) {
    if (!horario) return false;

    const nowMinutes = nowDate.getHours() * 60 + nowDate.getMinutes();

    const [startStr, endStr] = horario.split('-');
    const startMinutes = Number(startStr.split(':')[0]) * 60 + Number(startStr.split(':')[1]);
    const endMinutes = Number(endStr.split(':')[0]) * 60 + Number(endStr.split(':')[1]);

    return nowMinutes >= startMinutes && nowMinutes <= endMinutes;
}