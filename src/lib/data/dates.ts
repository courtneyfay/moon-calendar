import { DateTime } from 'luxon'
import { calculateDates } from '../helpers/calculateDates'
import { newMoons, fullMoons, allMoons } from './moonDates'
import { astrologyDates } from './astrologyDates'
import { seasonalDates } from './seasonalDates'

export const today: DateTime = DateTime.now()
export const tomorrow: DateTime = DateTime.now().plus({ days: 1 })
export const yesterday: DateTime = DateTime.now().minus({ days: 1 })

// TODO: rename calculateMoons?
export const fullMoon = calculateDates(fullMoons)
export const halfMoon = calculateDates(allMoons)
export const newMoon = calculateDates(newMoons)
export const astrologySigns = calculateDates(astrologyDates)
export const seasons = calculateDates(seasonalDates)

export const formatDate = (date: DateTime) => {
    return date.toFormat('MMMM dd, yyyy')
}
