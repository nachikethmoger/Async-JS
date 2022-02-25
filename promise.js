/*
   scenario

   1. register

   2. send welcome email

   3. login

   4. get user data

   5. display user data
*/



function register() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log('registar end');
                resolve('error while registering');
                resolve();
            }, 1000)
            // until this function execute it wont call the next 
            // by this we solved
    })
}

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log('email end');
                resolve();
            }, 1000)
            // until this function execute it wont call the next 
            // by this we solved
    })
}

function login(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log('login end');
                resolve();
            }, 1000)
            // until this function execute it wont call the next 
            // by this we solved
    })
}

function getUserData(callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                return reject('get user data rejected');
                console.log('user end');

            }, 1000)
            // until this function execute it wont call the next 
            // by this we solved
    })
}

function displayData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log('display end');
                resolve();
            }, 1000)
            // until this function execute it wont call the next 
            // by this we solved
    })
}


// callback hell
// register(function() {

//     sendEmail(function() {
//         login(function() {
//             getUserData(function() {
//                 displayData()
//             });

//         });
//     });
// });

// suppose if we provide parameter to the function it may become much more complex


// register()
//     .then(sendEmail)
//     .then(login)
//     .then(getUserData)
//     .then(displayData)
//     .catch((err) => {
//         console.log("error: ", err);
//     });


// async and await 
// it looks like a synchronous code but is async 
// await is used inside the function
async function authenticate() {
    try {
        await register();
        await sendEmail();
        await login();
        await getUserData();
        await displayData();
    } catch (err) {
        console.log('err', err);
        throw new Error();
    }
}

authenticate().then(() => {
    console.log('all set');
});

console.log('other applictn work');