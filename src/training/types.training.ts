import { Dog } from "./models/dog.model";
import { Country } from "./enums/country.enum";

// explicit
let anyType: any = 35;
anyType = "b";

let booleanType: boolean = true;

let stringType1: string = 'string';

let stringType2: string;
stringType2 = "another string";

let numType: number = 111;


// implicit
let implicitType = 'a';

let multipleTypes: boolean | number = true;
multipleTypes = 35;

const arrayExample1 = [1, 2, 3];

let numFromFunction = arrayExample1.reduce((num1, num2) => num1 + num2);

const arrayExample2: number[] = [1, 2, 3];

// checking types

const dog = new Dog(1);
const dogCount = 1;

// typeof only works with "initial"/"primitive" types in js
if (typeof dogCount === 'number') {

}

// use instanceof for classes, will also work if inheriting multiple classes
if (dog instanceof Dog) {

}

// type assertions/casting
let definitelyNotAString: any = 'a string';

let stringLength = (definitelyNotAString as string).length;
stringLength = (<string> definitelyNotAString).length;

// Arrays
let array1: any[] = ['a', 1, true];

let array2: boolean[] = [true, false, true];

let array3: (string | number)[] = ['string1', 1];

let doubleNestedBoolean: boolean[][] = [[true, true], [true]];

// Tuples
const exampleTuple: [string, number] = ['string', 1];

// Enums
function concatCountryNames(countryCode1: Country, countryCode2: Country) {
    return countryCode1 + countryCode2;
}

// Object
let exampleObject1: object = undefined; // {} is ok, [] is ok, NaN is not ok
let exampleObject2: Object = undefined; // {} is ok, [] is ok, NaN is not ok
let exampleObject3: {} = {};
// exampleObject3.firstName = "firstName"; -> won't work since exampleObject3 can only be an empty object










