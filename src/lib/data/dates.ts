import { DateTime } from 'luxon'
import { newMoons } from './moonDates'

export const formatDate = (date: DateTime) => {
    return date.toFormat('MMMM dd, yyyy')
}

export const today: DateTime = DateTime.now()
export const tomorrow: DateTime = DateTime.now().plus({days: 1})
export const yesterday: DateTime = DateTime.now().minus({days: 1})

const calculatePreviousNewMoon = () => {
    // find first new moon that is greater than today
    const index = newMoons.findIndex(moon => moon > today)
    // then use the new moon right before that
    return newMoons[index - 1]
}

const calculateNextNewMoon = () => {
    // TODO: figure out how to calculate this
    return newMoons[1]
}

export const previousNewMoon: DateTime | undefined = calculatePreviousNewMoon()
export const nextNewMoon: DateTime = calculateNextNewMoon()
