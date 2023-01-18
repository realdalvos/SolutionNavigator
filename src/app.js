console.log("Welcome to Solution Navigator")



function showAboutMe(){
    var result = confirm("Are you sure?");

        if(result) {
            document.write("You clicked OK button!");
        } else {
            document.write("You clicked Cancel button!");
        }
}


function showInformation(subject){
    const messageHTML= 'This text is for HTML';
    const messageCSS= 'This text is for CSS';
    const messageRWD= 'This text is for RWD';
    console.log("it works");
    switch (subject){
        case 'HTML':
            console.log("it works");
            document.getElementById("message").innerHTML =  messageHTML;
            break;
        case 'CSS':
            document.getElementById("message").innerHTML =  messageCSS;
            break;
        case 'RWD':
            document.getElementById("message").innerHTML =  messageRWD;
    }
}

let countValue = new Promise(function (resolve, reject) {
   reject('Promise rejected');
});

// executes when promise is resolved successfully
countValue.then(
    function successValue(result) {
        console.log(result);
    },
 )

// executes if there is an error
.catch(
    function errorValue(result) {
        console.log(result);
    }
);


//Uebung 4.2
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
    persons.forEach( person => person.cars.include( car ) &&  owners++);
    return owners > 1;
}

const result = conflict(seat, [peter, hans ]);
console.log(result);