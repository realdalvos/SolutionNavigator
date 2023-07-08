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