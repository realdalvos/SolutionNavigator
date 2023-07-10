//classes
class Shape {
    constructor(height, width, borderRadius, backgroundColor) {
        this.height = height
        this.width = width
        this.borderRadius = borderRadius
        this.backgroundColor = backgroundColor
    }
}
const redRectangle = new Shape(200, 100, 0, "red")
const blueCircle = new Shape(80, 80, 40, "blue")

console.log(blueCircle.height)

//template strings

let name = 'Vlad';
let birthYear = 2001;
let currentYear = 2023
//console.log(`Mein Name ist ${name} und bin ${currentYear-birthYear} alt´);
    
//Generators
function* taxiPassagers(){
    let passagers = 1;
    while(passagers<5)
        yield passagers++;
    console.log("Capacity full");
}
let pitStop = taxiPassagers();
console.log(pitStop.next().value);
console.log(pitStop.next().value);
console.log(pitStop.next().value);
console.log(pitStop.next().value);
console.log(pitStop.next().value);

//map/set
const myMap = new Map([[1,'one'],[2,'two']]);
console.log(myMap);
myMap.set( 1,2);
console.log(myMap);
myMap.delete(2);
console.log(myMap);
myMap.set(2,'two');
myMap.clear(2);
console.log(myMap);