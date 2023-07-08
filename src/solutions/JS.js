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

function fibonnaciUntil2000(x,y){
    if(fibonnaciNumber==0){
        console.log(x)
        console.log(y)
        fibonnaciNumber=fibonnaciNumber+2
        fibonnaciUntil2000(y,x+y)
    }
    else if(fibonnaciNumber<2001){
        console.log(x+y)
        fibonnaciNumber++
        fibonnaciUntil2000(y,x+y,)
    }
}
let fibonnaciNumber = 0

fibonnaciUntil2000(0,1)