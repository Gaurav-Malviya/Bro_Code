/*
nested functions = Functions inside other functions.
                   Outer functions have access to inner functions.
                   Inner functions are "hidden" from outside the scope.
                   used in closures (future video topic)
*/

function login()
{
    let userName= "Bob"
    let userInbox= 0

    function displayUserName()
    {
        console.log("Hello",userName,"!")
    }
    function displayUserInbox()
    {
        console.log("You have",userInbox,"mail.")
    }

    displayUserName()
    displayUserInbox()
}
login()


