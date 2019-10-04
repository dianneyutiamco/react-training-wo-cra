import { Interface1, Interface2} from "./interfaces";

let interface1Or2: Interface1 | Interface2;
interface1Or2.property1 = "string";

let interface1And2: Interface1 & Interface2;
interface1And2.property1 = "string";
interface1And2.property2 = "string";

type TypeInterface1And2 = Interface1 & Interface2;

let anotherInterface1And2: TypeInterface1And2;
anotherInterface1And2.property1 = "string";
anotherInterface1And2.property2 = "string";


