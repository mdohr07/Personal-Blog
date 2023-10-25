

export function formatDate(date) {
    return new Date(date).toLocaleDateString('de-DE',
    {timeZone: "Europe/Berlin",
    })
} 



