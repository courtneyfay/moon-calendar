import { DateTime, Interval } from 'luxon'
import { today } from './dates'

const calcNextMoon = (moonArray: DateTime[]) => {
    // TODO: figure out a better default value than this \/\/
    const defaultValue = moonArray[1]

    // find first new moon that is greater than current datetime
    return moonArray.find(moon => moon > today) || defaultValue
}

const calcPreviousMoon = (moonArray: DateTime[], nextMoon: DateTime) => {
    // find index of next new moon
    const index = moonArray.indexOf(nextMoon)
    // then use the new moon right before that
    return moonArray[index - 1]
}

const calcIntervalDates = (previousMoon: DateTime, nextMoon: DateTime) => {
    const previousMoonPlusOne = previousMoon.plus({ days: 1 })
    const nextMoonMinusOne = nextMoon.minus({ days: 1 })
    // TODO: fix bug on dates for full moon (as of sept 14) where Sept 28 is missing from the interval?
    return Interval.fromDateTimes(previousMoonPlusOne, nextMoonMinusOne).splitBy({ day: 1 }).map(d => d.start)
}

export const calculateDates = (moonArray: DateTime[]) => {
    const nextMoon = calcNextMoon(moonArray)
    const previousMoon = calcPreviousMoon(moonArray, nextMoon)
    const intervalDates = calcIntervalDates(previousMoon, nextMoon)

    return {
        previous: previousMoon,
        next: nextMoon,
        interval: intervalDates,
    }
}