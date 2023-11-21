export const chooseRandom = (list: string[]) => {
    const listLength = list.length
    const index = Math.random() * listLength | 0

    return list[index]
}