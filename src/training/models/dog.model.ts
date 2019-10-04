export class Dog {
    tails: number;
    private privateProperty: string;
    readonly readOnlyProperty: string;
    public publicProperty: string;

    constructor(data?: any) {
        this.tails = data.tails;
        this.privateProperty = data.privateProperty;
        this.readOnlyProperty = data.readOnlyProperty;
        this.publicProperty = data.publicProperty;
    }

    public publicMethod(dog1: Dog):string {
        return dog1.privateProperty;
    }

    private privateMethod():string {
        return this.privateProperty;
    }
}