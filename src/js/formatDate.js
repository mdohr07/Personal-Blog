import { date } from 'astro/zod';

export function formatDate(date) {
    return new Date(date).toLocaleDateString('de-DE',
    {timeZone: "Europe/Berlin",
    })
} 

console.log("Date in Card.astro: " + date);


