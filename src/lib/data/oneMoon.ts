export type TSphere = {
    position: [number, number, number],
    eventTitle: HTMLDivElement,
}

// hardcoding sample text
const text1 = document.createElement('div')
text1.textContent = '1'
const text2 = document.createElement('div')
text2.textContent = '2'
const text3 = document.createElement('div')
text3.textContent = '3'
const text4 = document.createElement('div')
text4.textContent = '4'

// setting up ring of spheres
export const spheres: TSphere[] = [
    // quadrant one
    {
        position: [3, 0, 0],
        eventTitle: text1,
    },
    // [0.8, 2.9, 0],
    // [1.5, 2.6, 0],
    // [2.12, 2.12, 0],
    // [2.6, 1.5, 0],
    // [2.9, 0.8, 0],

    // quadrant two
    {
        position: [0, 3, 0],
        eventTitle: text2,
    },
    // [0.8, -2.9, 0],
    // [1.5, -2.6, 0],
    // [2.12, -2.12, 0],
    // [2.6, -1.5, 0],
    // [2.9, -0.8, 0],

    // quadrant three
    {
        position: [0, -3, 0],
        eventTitle: text3,
    },
    // [-0.8, -2.9, 0],
    // [-1.5, -2.6, 0],
    // [-2.12, -2.12, 0],
    // [-2.6, -1.5, 0],
    // [-2.9, -0.8, 0],

    // quadrant four
    {
        position: [-3, 0, 0],
        eventTitle: text4,
    },
    // [-0.8, 2.9, 0],
    // [-1.5, 2.6, 0],
    // [-2.12, 2.12, 0],
    // [-2.6, 1.5, 0],
    // [-2.9, 0.8, 0],
  ]