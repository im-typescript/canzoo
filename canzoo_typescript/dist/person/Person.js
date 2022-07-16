"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makePerson = void 0;
var MAX_AGE = 100;
var Person = /** @class */ (function () {
    function Person(name, age) {
        if (age === void 0) { age = makeRandomNumber(); }
        this.name = name;
        this.age = age;
    }
    return Person;
}());
exports.default = Person;
function makeRandomNumber(max) {
    if (max === void 0) { max = MAX_AGE; }
    return Math.ceil((Math.random() * 100));
}
var makePerson = function (name, age) {
    if (age === void 0) { age = makeRandomNumber(); }
    return ({ name: name, age: age });
};
exports.makePerson = makePerson;
//# sourceMappingURL=Person.js.map