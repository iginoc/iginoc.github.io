function updateClock() {
    const now = new Date();

    // Formatter per l'ora (HH:mm:ss)
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    const timeString = new Intl.DateTimeFormat('it-IT', timeOptions).format(now);

    // Formatter per la data (Nome giorno, giorno Numero mese Anno)
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const dateString = new Intl.DateTimeFormat('it-IT', dateOptions).format(now);

    // Aggiornamento DOM
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

// Inizializza subito
updateClock();

// Aggiorna ogni secondo
setInterval(updateClock, 1000);
