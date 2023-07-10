// Simple Function
function volume(a,b,c){
    return a*b*c;
}
//Arrow Function
let volumeArrow = (a,b,c) => a*b*c;

console.log(volume(2,2,2));
console.log(volumeArrow(2,3,4));

//Filter

const array=[2,4,3,7];

const numbers = array.filter(n => n%2==0);

console.log(numbers);

//map

const numbers2 = array.filter(n => n%2==0).map(n => ({value: n}));

console.log(numbers2);

//reduce

const arr=[2,-4,3,7];

const sum = arr.reduce((accumulator,currentvalue) => accumulator + currentvalue);

console.log(sum);

//Spread

var essentials = ['lettuce','ham',,'cheddar','tomato'];
var hamburger = ['bread',...essentials,'mayo'];
console.log('My handburger has  these ingredients in the following order: ' + hamburger);

//call With call(), an object can use a method belonging to another object.

const besitzer = {
    nameAuto: function(){
        return this.name + " besitzt einen " + this.auto;
    }
}

const personA = {
    name:"Paul",
    auto:"Ford"
}
const personB = {
    name:"Jonas",
    auto:"Audi"
}

console.log(besitzer.nameAuto.call(personA));

console.log(besitzer.nameAuto.call(personB));


/*apply The call() method takes arguments separately.
The apply() method is very handy if you want to use an array instead of an argument list.

        The apply() method takes arguments as an array.



const besitzer2 = (a,b) => {
    return `${a} ${this.name} ${b}´;
};

const object = {name:"Paul"};

console.log(besitzer2.call(object,"Hallo","Wie gehts"));

*/
//selber arr von vorherigen Aufgaben(let arr=[2,-4,3,7];)
console.log(Math.max.apply(null,arr));

//bind With the bind() method, an object can borrow a method from another object.

const person = {
  firstName:"Pual",
  lastName: "Steinhauer",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hannah",
  lastName: "Kessel",
}

let fullName = person.fullName.bind(member);

