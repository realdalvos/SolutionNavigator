function identity(parameter){
    console.log(parameter)
}

function identity_function(parameter){
    identity(parameter)
}

function add(x, y){
    return x+y
}

function mul(x,y){
    return x*y
}

function addf(x) {
    return function(y) {
        return x + y
    }
}

const Person = {
    cars: []
};
const Auto = {};

const ford = {
    owner: '',
    __proto__: Person
};
const seat = {
    owner: '',
    __proto__: Person
};

const hans = {
    cars: [seat],
    __proto__: Person
};

const peter = {
    cars: [ford,seat],
    __proto__: Person
};

function conflict(car, persons){
    var owners = 0;
    persons.forEach( person => person.cars.includes( car ) &&  owners++);
    return owners > 1;
}

const result = conflict(seat, [peter, hans ]);
console.log(result);

let fibonnaciNumber = 0

function fibonnaciUntil2000(x,y){
    if(fibonnaciNumber=0){
        console.log(x)
        console.log(y)
        fibonnaciNumber++
        fibonnaciUntil2000(y,x+y)
    }
    if(fibonnaciNumber<2){
        console.log(x+y)
        fibonnaciNumber++
        fibonnaciUntil2000(y,x+y)
    }
}

fibonnaciUntil2000(0,1)