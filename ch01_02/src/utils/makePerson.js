"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testMakePerson = exports.makePerson = void 0;
function makePerson(name, age) {
    return { name, age };
}
exports.makePerson = makePerson;
function testMakePerson() {
    console.log(makePerson('Janne', 22), makePerson('Jack', 32));
}
exports.testMakePerson = testMakePerson;
//# sourceMappingURL=makePerson.js.map