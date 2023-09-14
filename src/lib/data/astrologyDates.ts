import { DateTime } from 'luxon'

// TODO: is there an api that'll give me this info for free?
export const astrologyDates = [
    // TODO: would be nice to have some way of know more data about each sign:
    // e.g. name
    DateTime.local(2023, 8, 23), // Virgo
    DateTime.local(2023, 9, 23), // Libra
    DateTime.local(2023, 10, 23), // Scorpio
    DateTime.local(2023, 11, 22), // Sagittarius
    DateTime.local(2023, 12, 22), // Capricorn
]