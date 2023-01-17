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