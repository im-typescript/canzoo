let MAX_AGE : number = 100;

export interface IPerson {
    name : string
    age : number
}

export default class Person implements IPerson {
    constructor(public name : string, public age : number = makeRandomNumber()) {}
}

function makeRandomNumber(max : number = MAX_AGE) : number {
    return Math.ceil((Math.random() * 100));
}

export const makePerson = (name : string, age : number = makeRandomNumber()) : IPerson => ({name, age});