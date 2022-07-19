"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chance_1 = require("chance");
var Person_1 = __importDefault(require("./person/Person"));
var R = __importStar(require("ramda"));
var RangeIterable_1 = require("./RangeIterable");
var yield_return_1 = require("./yield-return");
// testMakePerson()
// 
// const testMakePerson2 = () :void =>{
// let jane: IPerson = makePerson('jane')
// let jack: IPerson = makePerson('jack')
// console.log(jane, jack);
// }
// testMakePerson2()
var chance = new chance_1.Chance();
var persons = R.range(0, 2).map(function (n) { return new Person_1.default(chance.name(), chance.age()); });
// console.log(persons);
var iterator = new RangeIterable_1.RangeIterable(1, 3 + 1);
// for (let value of iterator)
// console.log(value)
var iter = (0, yield_return_1.gen)();
while (true) {
    var _a = iter.next((0, yield_return_1.random)(10, 1)), value = _a.value, done = _a.done;
    console.log(done);
    if (done)
        break;
    console.log(value);
}
//# sourceMappingURL=index.js.map