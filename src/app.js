console.log("Welcome to Solution Navigator")



function selected(){
    document.getElementById("message").style.color = "blue";
}

function showExampleText(subject){
    const messageHTML= 'HTML consists of a series of tags and attributes used to structure and format the content on a webpage, such as headings, paragraphs, and links. HTML is the foundation of all websites, and is typically combined with other languages such as CSS and JavaScript to create dynamic and interactive web pages.\n';
    const messageCSS= 'CSS allows for the separation of document content from document presentation, including layout, colors, and fonts.\n';
    const messageRWD= 'RWD uses CSS and JavaScript to adapt the layout of a webpage to the size and capabilities of the device being used to access it, ensuring a consistent user experience across different devices.\n';
    const messageJS= 'JS allows for the creation of things like responsive forms, animations, and interactive maps on a website.\n';
    const messageDOM= 'DOM represents the structure of a document as a tree-like object and allows for the manipulation and dynamic updates of elements within the document.\n';
    const messageES= 'ES\'s a scripting language that is primarily used to create interactive and dynamic effects within web browsers, but can also be used on the server-side through technologies such as Node.js.\n';
    const messageTS= 'TS can be transpiled to JavaScript, making it compatible with all web browsers and JavaScript environments.\n';

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
            document.getElementById("message").innerHTML = messageES;
            break;
        case 'TS':
            document.getElementById("message").innerHTML = messageTS;
            break;
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