function addf(x) {
    return function(y) {
        return x + y;
    };
}
const add5 = addf(5);
console.log(add5(3)); // 8