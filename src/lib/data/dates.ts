import { DateTime } from 'luxon'
import { newMoons, fullMoons, allMoons } from './moonDates'
import { calculateDates } from './calculateDates'

export const today: DateTime = DateTime.now()
export const tomorrow: DateTime = DateTime.now().plus({ days: 1 })
export const yesterday: DateTime = DateTime.now().minus({ days: 1 })

export const fullMoon = calculateDates(fullMoons)
export const halfMoon = calculateDates(allMoons)
export const newMoon = calculateDates(newMoons)

export const formatDate = (date: DateTime) => {
    return date.toFormat('MMMM dd, yyyy')
}
