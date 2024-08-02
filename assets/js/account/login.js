
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.replace("/dashboard/");
    }
});


function login () {
email = document.getElementById('email').value
password = document.getElementById('password').value

if (validate_password(password) == false) {
    return
}

auth.signInWithEmailAndPassword(email, password)
.then(function() {
    var user = auth.currentUser

    var database_ref = database.ref()

    var user_data = {
    last_login : Date.now()
    }

    database_ref.child('users/' + user.uid).update(user_data)

    showMessage("Logged in successfully")

})
.catch(function(error) {
    var error_code = error.code
    var error_message = error.message

    showMessage(error_message);
})
}



function validate_email(email) {
expression = /^[^@]+@\w+(\.\w+)+\w$/
if (expression.test(email) == true) {
    return true
} else {
    return false
}
}

function validate_password(password) {
if (password < 6) {
    return false
} else {
    return true
}
}

function validate_field(field) {
if (field == null) {
    return false
}

if (field.length <= 0) {
    return false
} else {
    return true
}
}

function resetMail(){
    resetmymail = document.getElementById('email').value
    auth.sendPasswordResetEmail(resetmymail)
    .then(function() {
        showMessage("Successfully sent");
    })
    .catch(function(error) {
        showMessage("Email invalid");
    });
}
    
    
    
    
    
    
    
//snackbar
function showMessage(message) {
    var x = document.getElementById("snackbar");
    x.innerHTML = message;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4000);
}