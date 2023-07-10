function hatFehler(string1: string, string2: string): boolean {
    if (string1.length !== string2.length) {
        return true;
    }
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] !== string2[i]) {
            return true;
        }
    }
    return false;
}

const mistakeDetected = hatFehler("hallo", "halo");
console.log(mistakeDetected); // true

//union

function func(code: (string | number)){
    //TODO
}

//literals

let truth:'NoGF';
    truth = 'GF'; //compiler error
    truth = 'NoGF'; //ok

//literals mit union
let trueAndWrong: 'GF'|'NoGF';
    trueAndWrong = 'rich';//compiler error

//alias(type)
//Die Variable var1, zur der type_alias zugewiesen ist, kann das Typ von var1 zu allen 3 deklarierten Typen gewechselt werden.
type type_alias = string | number | boolean;
let var1: type_alias;
    var1 = 1;
    console.log(var1);
    var1 = "WE";
    console.log(var1);
    var1 = true;
    console.log(var1);

