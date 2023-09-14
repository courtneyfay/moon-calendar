import { DateTime } from 'luxon'
import { newMoons, fullMoons } from './moonDates'

export const formatDate = (date: DateTime) => {
    return date.toFormat('MMMM dd, yyyy')
}

export const today: DateTime = DateTime.now()
export const tomorrow: DateTime = DateTime.now().plus({days: 1})
export const yesterday: DateTime = DateTime.now().minus({days: 1})

const calculateNextAndPrevious = (moonArray: DateTime[]) => {
    // TODO: figure out a better default value than this \/\/
    const defaultValue = moonArray[1]
    // find first new moon that is greater than current datetime
    const nextMoon = moonArray.find(moon => moon > today) || defaultValue

    // find index of next new moon
    const index = moonArray.indexOf(nextMoon)
    // then use the new moon right before that
    const previousMoon = moonArray[index - 1]

    return {
        previous: previousMoon,
        next: nextMoon,
    }
}

export const newMoon = calculateNextAndPrevious(newMoons)
export const fullMoon = calculateNextAndPrevious(fullMoons)
