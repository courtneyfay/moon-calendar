import { DateTime } from 'luxon'

// TODO: is there an api that'll give me this info for free?
export const newMoons = [
    // TODO: would be nice to have some way of know more data about each moon:
    // e.g. full or new, star sign, etc.
    DateTime.local(2023, 8, 16, 5, 37), // 23°16 Leo - August 16th, 2023, at 5:37 am EST
    DateTime.local(2023, 9, 14, 21, 39), // 21°58 Virgo - September 14th, 2023, at 9:39 pm EST
    DateTime.local(2023, 11, 13, 4, 27), // 20°43 Scorpio - November 13th, 2023, at 4:27 am EST
    DateTime.local(2023, 12, 12, 18, 31), // 20°39 Sagittarius - December 12th, 2023, at 6:31 pm EST
]

export const fullMoons = [
    DateTime.local(2023, 8, 30, 21, 35), // 7°24 Pisces - August 30th, 2023, at 9:35 pm EST
    DateTime.local(2023, 9, 29, 5, 57), // 6°00 Aries - September 29th, 2023, at 5:57 am EST
    DateTime.local(2023, 11, 27, 4, 16), // 4°51 Gemini - November 27th, 2023, at 4:16 am EST
    DateTime.local(2023, 12, 26, 19, 32), // 4°57 Cancer - December 26th, 2023, at 7:32 pm EST
]

export const allMoons = [...newMoons, ...fullMoons].sort((a, b) => a.toMillis() - b.toMillis())