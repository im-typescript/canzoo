export function makePerson(name: string, age: number) : {name : string, age : number} {
    return {name, age}
}

export function testMakePerson() : void {
    console.log(
        makePerson('Janne', 22),
        makePerson('Jack', 32)
    )
}