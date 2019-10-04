export class Human {
    firstName: string;
    lastName: string;
    age: number;

    constructor(data? : any) {
        this.firstName = data.firstName || 'First Name';
        this.lastName = data.lastName || 'Last Name';
        this.age = data.age;
    }

}