import { DateTime } from 'luxon'
import { newMoons } from './moonDates'

export const formatDate = (date: DateTime) => {
    return date.toFormat('MMMM dd, yyyy')
}

export const today: DateTime = DateTime.now()
export const tomorrow: DateTime = DateTime.now().plus({days: 1})
export const yesterday: DateTime = DateTime.now().minus({days: 1})

const calculateNextNewMoon = () => {
    // find first new moon that is greater than current datetime
    return newMoons.find(moon => moon > today) || newMoons[0]
    // TODO: figure out a better default value than newMoons[0]
}

export const nextNewMoon: DateTime = calculateNextNewMoon()

const calculatePreviousNewMoon = () => {
    // find index of next new moon
    const index = newMoons.indexOf(nextNewMoon)
    // then use the new moon right before that
    return newMoons[index - 1]
}

export const previousNewMoon: DateTime = calculatePreviousNewMoon()
