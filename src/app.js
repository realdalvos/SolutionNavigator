console.log("Welcome to Solution Navigator")



function showAboutMe(){
    var result = confirm("Are you sure?");

        if(result) {
            document.write("You clicked OK button!");
        } else {
            document.write("You clicked Cancel button!");
        }
}


function showExampleText(subject){
    const messageHTML= 'This text is for HTML';
    const messageCSS= 'This text is for CSS';
    const messageRWD= 'This text is for RWD';
    const messageJS= 'This text is for JS';
    const messageDOM= 'This text is for DOM';
    const messageES= 'This text is for ES';
    switch (subject){
        case 'HTML':
            document.getElementById("message").innerHTML =  messageHTML;
            break;
        case 'CSS':
            document.getElementById("message").innerHTML =  messageCSS;
            break;
        case 'RWD':
            document.getElementById("message").innerHTML =  messageRWD;
            break;
        case 'JS':
            document.getElementById("message").innerHTML =  messageJS;
            break;
        case 'DOM':
            document.getElementById("message").innerHTML =  messageDOM;
            break;
        case 'ES':
            document.getElementById("message").src = 'old_index.html';
    }
}

function showExamplePicture(subject){
    const messageHTML= 'This text is for HTML';
    const messageCSS= 'This text is for CSS';
    const messageRWD= 'This text is for RWD';
    const messageJS= 'This text is for JS';
    const messageDOM= 'This text is for DOM';
    const messageES= 'This text is for ES';
    switch (subject){
        case 'HTML':
            document.getElementById("message").innerHTML =  messageHTML;
            break;
        case 'CSS':
            document.getElementById("message").innerHTML =  messageCSS;
            break;
        case 'RWD':
            document.getElementById("message").innerHTML =  messageRWD;
            break;
        case 'JS':
            document.getElementById("message").innerHTML =  messageJS;
            break;
        case 'DOM':
            document.getElementById("message").innerHTML =  messageDOM;
            break;
        case 'ES':
            document.getElementById("message").src = 'old_index.html';
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