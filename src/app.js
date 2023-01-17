console.log("Welcome to Solution Navigator")






function showInformation(subject){
    const messageHTML= 'This text is for HTML';
    const messageCSS= 'This text is for CSS';
    const messageRWD= 'This text is for RWD';
    console.log("it works");
    switch (subject){
        case 1:
            console.log("it works");
            document.getElementById("message").innerHTML =  messageHTML;
            break;
        case 2:
            document.getElementById("message").innerHTML =  messageCSS;
            break;
        case 3:
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