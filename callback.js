/*
   scenario

   1. register

   2. send welcome email

   3. login

   4. get user data

   5. display user data
*/

/*

function register(callback) {
    setTimeout(() => {
        console.log('registar end');
    }, 1000)
    // until this function execute it wont call the next 
    // by this we solved
    callback();
}

function sendEmail(callback1) {
    setTimeout(() => {
        console.log('email end');
        callback1();
    }, 2000)
}

function login(callback) {
    setTimeout(() => {
        console.log('login end');
        callback();
    }, 6000)
}

function getUserData(callback) {
    setTimeout(() => {
        console.log('user end');
        callback();
    }, 3000)
}

function displayData(callback) {
    setTimeout(() => {
        console.log('display end');
        callback();
    }, 1000)
}


// callback hell
register(function() {

    sendEmail(function() {
        login(function() {
            getUserData(function() {
                displayData()
            });

        });
    });
});

// suppose if we provide parameter to the function it may become much more complex



console.log('other applictn work');

*/