function example<T>(arg: T) : T {
    return arg;
}

example(5);

function anotherExample<T>(arg: T[]): T {
    return arg[0];
}