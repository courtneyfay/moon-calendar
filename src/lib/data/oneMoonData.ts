export type TOneMoon = {
    id: number
    position: [number, number, number]
    time: string
    event: string
    link: string
    color: string
}

// hardcoded ring of spheres
  // const spheres: TSphere[] = [
  //   
  //   // quadrant one
  //   {
  //       position: [0, 3, 0],
  //       eventTitle: generateSphereLabel('11 am - Homework'),
  //       sphereColor: '#ADB993',
  //   },
  //   {
  //       position: [0.8, 2.9, 0],
  //       eventTitle: generateSphereLabel('12 pm - Workshop'),
  //       sphereColor: '#ADB993',
  //   },
  //   {
  //       position: [1.5, 2.6, 0],
  //       eventTitle: generateSphereLabel('1 pm - Workshop'),
  //       sphereColor: '#ADB993',
  //   },
  //   {
  //       position: [2.12, 2.12, 0],
  //       eventTitle: generateSphereLabel('2 pm - Homework'),
  //       sphereColor: '#ADB993',
  //   },
  //   {
  //       position: [2.6, 1.5, 0],
  //       eventTitle: generateSphereLabel('3 pm - Homework'),
  //       sphereColor: '#ADB993',
  //   },
  //   {
  //       position: [2.9, 0.8, 0],
  //       eventTitle: generateSphereLabel('4 pm - Homework'),
  //       sphereColor: '#ADB993',
  //   },
    

  //   // quadrant two
  //   {
  //       position: [3, 0, 0],
  //       eventTitle: generateSphereLabel('5 pm - Holiday Party'),
  //       sphereColor: '#ADB993',
  //   },
  //   {
  //       position: [2.9, -0.8, 0],
  //       eventTitle: generateSphereLabel('6 pm - Holiday Party'),
  //       sphereColor: '#ADB993',
  //   },
  //   {
  //       position: [2.6, -1.5, 0],
  //       eventTitle: generateSphereLabel('7 pm - Whim Time'),
  //       sphereColor: '#ADB993',
  //   },
  //   {
  //       position: [2.12, -2.12, 0],
  //       eventTitle: generateSphereLabel('8 pm - Whim Time'),
  //       sphereColor: '#ADB993',
  //   },
  //   {
  //       position: [1.5, -2.6, 0],
  //       eventTitle: generateSphereLabel('9 pm'),
  //       sphereColor: 'white',
  //   },
  //   {
  //       position: [0.8, -2.9, 0],
  //       eventTitle: generateSphereLabel('10 pm'),
  //       sphereColor: 'white',
  //   },

  //   // quadrant three
  //   {
  //       position: [0, -3, 0],
  //       eventTitle: generateSphereLabel('11 pm'),
  //       sphereColor: 'white',
  //   },
  //   {
  //       position: [-0.8, -2.9, 0],
  //       eventTitle: generateSphereLabel('12 am'),
  //       sphereColor: 'white',
  //   },
  //   {
  //       position: [-1.5, -2.6, 0],
  //       eventTitle: generateSphereLabel('1 am'),
  //       sphereColor: 'white',
  //   },
  //   {
  //       position: [-2.12, -2.12, 0],
  //       eventTitle: generateSphereLabel('2 am'),
  //       sphereColor: 'white',
  //   },
  //   {
  //       position: [-2.6, -1.5, 0],
  //       eventTitle: generateSphereLabel('3 am'),
  //       sphereColor: 'white',
  //   },
  //   {
  //       position: [-2.9, -0.8, 0],
  //       eventTitle: generateSphereLabel('4 am'),
  //       sphereColor: 'white',
  //   },

  //   // quadrant four
  //   {
  //       position: [-3, 0, 0],
  //       eventTitle: generateSphereLabel('5 am'),
  //       sphereColor: 'white',
  //   },
  //   {
  //       position: [-2.9, 0.8, 0],
  //       eventTitle: generateSphereLabel('6 am - Recycling out'),
  //       sphereColor: '#ADB993',
  //   },
  //   {
  //       position: [-2.6, 1.5, 0],
  //       eventTitle: generateSphereLabel('7 am'),
  //       sphereColor: 'white',
  //   },
  //   {
  //       position: [-2.12, 2.12, 0],
  //       eventTitle: generateSphereLabel('8 am'),
  //       sphereColor: 'white',
  //   },
  //   {
  //       position: [-1.5, 2.6, 0],
  //       eventTitle: generateSphereLabel('9 am'),
  //       sphereColor: 'white',
  //   },
  //   {
  //       position: [-0.8, 2.9, 0],
  //       eventTitle: generateSphereLabel('10 am - Homework'),
  //       sphereColor: '#ADB993',
  //   },
  // ]

const HOMEWORK = 'Homework'
const chooseColor = (eventValue: string) => {
    return eventValue ? '#ADB993' : ''
}
// todo: figure out how to programatically generate the positions (probably need to use radians/PI)
export const oneMoonData: TOneMoon[] = [
    {
        id: 1,
        position: [0, 3, 0],
        time: '11 am',
        event: HOMEWORK,
        link: 'https://www.google.com',
        color: chooseColor(HOMEWORK),
    },
]