console.log("Welcome to Solution Navigator")

const setSolution = (id, visibility) => {


    const element = document.getElementById(id);
    console.log(element);
    switch (visibility) {
        case "visible":
            element.classList.remove("hidden");
            break;
        case "hide":
            element.classList.add("hidden");
            break;
    }
}



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
    const messageGRID= 'They allow the website to automatically adjust its content to different screen sizes and devices, providing an optimal viewing experience for the user. By using a RWD grid, designers and developers can ensure that a website looks great on desktop, tablet, and mobile devices.';
    const messageFLEX= 'Using RWD with flexbox allows for creating web designs that adjust and respond to the size of the user\'s screen and provide a optimized viewing experience on different devices.';
    const messageFUNC= 'It encourages the creation of small, reusable, and composable functions to build complex systems.';
    const messageASAW= 'async/await is a language feature in JavaScript that enables asynchronous programming using promises in a more concise and readable way. async functions return a promise implicitly and await can be used to wait for the completion of a promise before continuing with the execution of the code.';

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
        case 'GRID':
            document.getElementById("message").innerHTML = messageGRID;
            break;
        case 'FLEX':
            document.getElementById("message").innerHTML = messageFLEX;
            break;
        case 'FUNC':
            document.getElementById("message").innerHTML = messageFUNC;
            break;
        case 'ASAW':
            document.getElementById("message").innerHTML = messageASAW;
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