import { Chance } from "chance";
import Person, { IPerson, makePerson } from "./person/Person";
import { testMakePerson } from "./utils/makePerson";
import * as R from 'ramda';
import { RangeIterable } from './RangeIterable';

// testMakePerson()
// 
// const testMakePerson2 = () :void =>{
    // let jane: IPerson = makePerson('jane')
    // let jack: IPerson = makePerson('jack')

    // console.log(jane, jack);
// }

// testMakePerson2()

const chance = new Chance();
let persons : IPerson[] = R.range(0, 2).map((n: number) => new Person(chance.name(), chance.age()))

console.log(persons);

const iterator = new RangeIterable(1, 3 + 1);

for (let value of iterator)
    console.log(value)