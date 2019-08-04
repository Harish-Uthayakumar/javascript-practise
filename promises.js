///////////////////////////////////////
// Lecture: Hoisting

















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


//


function webcallback() {



    return new Promise((resolve, reject)=> {

        if(userLeft) {

            reject({

                name: 'user left',
                messgae: ':('
            })

        }
        else if(userWatchingCatMeme) {

            reject({

                name: 'cat meme',
                message: 'what a douche'
            })
        }

        else {

            resolve('This is awesome')
        }

        
    })
}


webcallback().then((message) => {

    console.log(message)
}).catch((error) => {

    console.log(error.name + 'this is the time' + error.message)
})
 
