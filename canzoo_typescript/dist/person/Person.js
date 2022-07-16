"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePerson = void 0;
let MAX_AGE = 100;
class Person {
    constructor(name, age = makeRandomNumber()) {
        this.name = name;
        this.age = age;
    }
}
exports.default = Person;
function makeRandomNumber(max = MAX_AGE) {
    return Math.ceil((Math.random() * 100));
}
const makePerson = (name, age = makeRandomNumber()) => ({ name, age });
exports.makePerson = makePerson;
//# sourceMappingURL=Person.js.map