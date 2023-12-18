export type TOneMoon = {
    id: number
    position: [number, number, number]
    time: string
    color: string
    event?: string
    link?: string
}

const HOMEWORK = 'Homework'
const WORKSHOP = 'Workshop'
const HOLIDAY_PARTY = 'Holiday Party'
const WHIM_TIME = 'Whim Time'
const RECYCLING_OUT = 'Recycling Out'
const chooseColor = (eventValue?: string) => {
    return eventValue ? '#ADB993' : 'white'
}
// todo: figure out how to programatically generate the positions (probably need to use radians/PI)
export const oneMoonData: TOneMoon[] = [
    // quadrant one
    {
        id: 1,
        position: [0, 3, 0],
        time: '11 am',
        event: HOMEWORK,
        link: 'https://www.homework.com',
        color: chooseColor(HOMEWORK),
    },
    {
        id: 2,
        position: [0.8, 2.9, 0],
        time: '12 pm',
        event: WORKSHOP,
        link: 'https://www.workshop.com',
        color: chooseColor(WORKSHOP),
    },
    {
        id: 3,
        position: [1.5, 2.6, 0],
        time: '1 pm', 
        event: WORKSHOP,
        link: 'https://www.workshop.com',
        color: chooseColor(WORKSHOP),
    },
    {
        id: 4,
        position: [2.12, 2.12, 0],
        time: '2 pm',
        event: HOMEWORK,
        link: 'https://www.homework.com',
        color: chooseColor(HOMEWORK),
    },
    {
        id: 5,
        position: [2.6, 1.5, 0],
        time: '3 pm',
        event: HOMEWORK,
        link: 'https://www.homework.com',
        color: chooseColor(HOMEWORK),
    },
    {
        id: 6,
        position: [2.9, 0.8, 0],
        time: '4 pm',
        event: HOMEWORK,
        link: 'https://www.homework.com',
        color: chooseColor(HOMEWORK),
    },

    // quadrant two
    {
        id: 7,
        position: [3, 0, 0],
        time: '5 pm',
        event: HOLIDAY_PARTY,
        color: chooseColor(HOLIDAY_PARTY),
    },
    {
        id: 8,
        position: [2.9, -0.8, 0],
        time: '6 pm',
        event: HOLIDAY_PARTY,
        color: chooseColor(HOLIDAY_PARTY),
    },
    {
        id: 9,
        position: [2.6, -1.5, 0],
        time: '7 pm',
        event: WHIM_TIME,
        color: chooseColor(WHIM_TIME),
    },
    {
        id: 10,
        position: [2.12, -2.12, 0],
        time: '8 pm',
        event: WHIM_TIME,
        color: chooseColor(WHIM_TIME),
    },
    {
        id: 11,
        position: [1.5, -2.6, 0],
        time: '9 pm',
        color: chooseColor(''),
    },
    {
        id: 12,
        position: [0.8, -2.9, 0],
        time: '10 pm',
        color: chooseColor(),
    },

    // quadrant three
    {
        id: 13,
        position: [0, -3, 0],
        time: '11 pm',
        color: chooseColor(),
    },
    {
        id: 14,
        position: [-0.8, -2.9, 0],
        time: '12 am',
        color: chooseColor(),
    },
    {
        id: 15,
        position: [-1.5, -2.6, 0],
        time: '1 am',
        color: chooseColor(),
    },
    {
        id: 16,
        position: [-2.12, -2.12, 0],
        time: '2 am',
        color: chooseColor(),
    },
    {
        id: 17,
        position: [-2.6, -1.5, 0],
        time: '3 am',
        color: chooseColor(),
    },
    {
        id: 18,
        position: [-2.9, -0.8, 0],
        time: '4 am',
        color: chooseColor(),
    },

    // quadrant four
    {
        id: 19,
        position: [-3, 0, 0],
        time: '5 am',
        color: chooseColor(),
    },
    {
        id: 20,
        position: [-2.9, 0.8, 0],
        time: '6 am',
        event: RECYCLING_OUT,
        color: chooseColor(RECYCLING_OUT),
    },
    {
        id: 21,
        position: [-2.6, 1.5, 0],
        time: '7 am',
        color: chooseColor(),
    },
    {
        id: 22,
        position: [-2.12, 2.12, 0],
        time: '8 am',
        color: chooseColor(),
    },
    {
        id: 23,
        position: [-1.5, 2.6, 0],
        time: '9 am',
        color: chooseColor(),
    },
    {
        id: 24,
        position: [-0.8, 2.9, 0],
        time: '10 am',
        event: HOMEWORK,
        color: chooseColor(HOMEWORK),
    },
]