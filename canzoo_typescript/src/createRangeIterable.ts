export const createRangeIterable = (from : number, to : number ) => {
    let currentValue = from
    return {
        next () {
            const value : number | undefined = currentValue < to ? currentValue++ : undefined
            const done : boolean = value === undefined
            return { value, done }
        }
    }
}