
//remove any alerts when the user clicks the input box to start typing again
$("input").on("click", function (event) {
    console.log("hey");
    $(".alert").css("display", "none");
})

//create a new user when click the submit button
$("#newUserBtn").on("click", function (event) {
    event.preventDefault();
    //get user info
    const user = $("#newUser").val().trim();
    const password1 = $("#newUserPW1").val().trim();
    const password2 = $("#newUserPW2").val().trim();
    //if a parameter left blank, instruct user to enter both fields
    if (!user || !password1 || !password2) {
        $(".alert").text("Enter username and password");
        $(".alert").css("display", "block");
        return;
    } else if (password1 !== password2) {
        $(".alert").text("Passwords do not match");
        $(".alert").css("display", "block");
        return;
    } else {
        //otherwise run the signUpUser function
        signUpUser(user, password1);
    }
});


//sign in a user after clicking submit on log in
$("#oldUserBtn").on("click", function (events) {

    event.preventDefault();
    //grab user's info
    const user = $("#oldUser").val().trim();
    const password = $("#oldUserPW").val().trim();
    //if a field left blank, instruct user to fill it out
    if (!user || !password) {
        $(".alert").text("Enter username and password");
        $(".alert").css("display", "block");
        return;
    } else {
        //if the form is filled out properly, run the log in function
        logInUser(user, password);
    }

})


//function to sign up a new user
function signUpUser(username, password) {
    //send the username and password to the database throught the api sign up route
    $.post("/api/signup", {
        username: username,
        password: password
    }).then(function (data) {
        console.log(data);
        //if no error, send to survey
        if (data === "/survey") {
            window.location.replace(data);
            //if error, throw error message
        } else {
            throw (data.errors[0].message);
        }
        //catch the error and run the error code
    }).catch(newUserErr);
}


//function to sign in old user
function logInUser(username, password) {
    //send the user info 
    $.post("/api/login", {
        username: username,
        password: password
    }).then(function (data) {
        //if no error, send to survey
        if (data === "/survey") {
            window.location.replace(data);
            //if error, throw error message
        } else {
            console.log(data.errors[0].message);
        }
        //catch the error and run the error code
    }).catch(logInErr);
}


function newUserErr(err) {
    if (err === "username must be unique") {
        $("#signUpAlert").text("That username has already been chosen. Please pick a different one.");
    } else {
        $("#signUpAlert").text(err);
    }
    $("#signUpAlert").css("display", "block");
}

function logInErr(err) {
    $("#signInAlert").text("Incorrect username or password");
    $("#signInAlert").css("display", "block");

}