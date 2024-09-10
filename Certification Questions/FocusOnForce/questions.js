function test1() {
    function test3() {
        console.log('test3');
    }
    setTimeout(test3, 0);

    console.log('test1');
    function test2() {
        console.log('test2');
    };

    test2()
};
test1();

/* B. Function 'test1' is invoked and placed on the call stack and code execution begins. The 'set Timeout is invoked
 and the timing is handled by the browser. Function test2' is invoked and placed on the call stack. Function 'test2'
  finishes and is removed. Function test1 finishes and is removed. When the timer is done, function test3 is placed 
  on the callback queue and awaits the event loop to be placed on the call stack. */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* The code below was used to test the given function named getUser. There is a record in the database with the id 12. 
But there is no record with the id 400.
11. getUser (12);
12. getUser (400);
The function returns a Promise object. However, the code snippet does not return any output, except an uncaught error 
when line 2 is executed. Which of the following can be done to resolve the issue? */

let getUser = function (id) {
    return new Promise((resolve, reject) => {
        let user = getUserFromStorage(id);
        if(user) {
            resolve(user);
        } else {
            reject('User not found');
        }
    });
}

// R = A, B y C.
/* A. The 'async and 'await keywords can be used with a 'try. catch' statement to receive a response when the Promise is 
   fulfilled and catch errors when it is rejected.
B. The 'then' method should be called on the Promise object to recelve a response when the Promise Is fulfilled.
C. The 'catch' method should be called on the Promise object to catch the error when the Promise Is rejected.
D. The 'getUser method must be wrapped within a console. log statement to display the returned value.
E. The 'resolve method can be used to receive a value or error based on whether the Promise is fulfilled or rejected. */


/* In this case, the 'getUser function returns a new Promise object. When the Promise object is created, the 'executor' 
function that is passed to 'new Promise is run automatically. The 'executor' function accepts 'resolve and 'reject' 
functions as parameters. If the value of user' is valid, the resolve() function is called to fulfill the promise 
with the supplied value. Otherwise, the reject function is called to reject the promise with an error. 
The console.log| method can be used on the response from a fulfilled Promise to display the value. This response 
can be received by using the then method or the await keyword inside an async function.*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

