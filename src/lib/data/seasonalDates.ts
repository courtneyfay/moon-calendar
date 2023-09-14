import { DateTime } from 'luxon'

// TODO: is there an api that'll give me this info for free?
export const seasonalDates = [
    // TODO: would be nice to have some way of know more data about each season:
    // e.g. name
    DateTime.local(2023, 6, 21, 10, 57), // Summer Solstice
    DateTime.local(2023, 9, 23, 2, 49), // Autumnal Equinox
    DateTime.local(2023, 12, 21, 22, 27), // Winter Solstice
]