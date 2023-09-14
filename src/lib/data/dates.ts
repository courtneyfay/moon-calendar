import { DateTime, Interval } from 'luxon'
import { newMoons, fullMoons, allMoons } from './moonDates'

export const formatDate = (date: DateTime) => {
    return date.toFormat('MMMM dd, yyyy')
}

export const today: DateTime = DateTime.now()
export const tomorrow: DateTime = DateTime.now().plus({ days: 1 })
export const yesterday: DateTime = DateTime.now().minus({ days: 1 })

const calculateDates = (moonArray: DateTime[]) => {
    // CALC NEXT MOON
    // TODO: figure out a better default value than this \/\/
    const defaultValue = moonArray[1]
    // find first new moon that is greater than current datetime
    const nextMoon = moonArray.find(moon => moon > today) || defaultValue

    // CALC PREVIOUS MOON
    // find index of next new moon
    const index = moonArray.indexOf(nextMoon)
    // then use the new moon right before that
    const previousMoon = moonArray[index - 1]

    // CALC DATES BETWEEN MOONS
    const previousMoonPlusOne = previousMoon.plus({ days: 1 })
    const nextMoonMinusOne = nextMoon.minus({ days: 1 })
    const interval = Interval.fromDateTimes(previousMoonPlusOne, nextMoonMinusOne).splitBy({ day: 1 }).map(d => d.start)

    return {
        previous: previousMoon,
        next: nextMoon,
        interval,
    }
}

export const newMoon = calculateDates(newMoons)
export const fullMoon = calculateDates(fullMoons)
export const halfMoon = calculateDates(allMoons)
