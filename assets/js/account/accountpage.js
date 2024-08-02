firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.querySelector("body").classList.add("loggedin");
        document.querySelector("body").classList.remove("notloggedin");
        firebase.storage().ref('users/' + user.uid + '/profile.jpg').getDownloadURL().then(imgURL => {
            document.getElementById('profilepic').src = imgURL;
            document.getElementById("profilepic").style = "opacity:1;";
            document.querySelector("body").classList.add("profileImg");
        }).catch((error) => {
            error.message
            document.getElementById("profilepic").src = "https://avatars.dicebear.com/api/initials/" + user.displayName + ".svg?background=transparent";
            document.getElementById("profilepic").style = "background:linear-gradient(330deg, #0069ff, #00ccff)";
        });
    } else{
        window.location.replace("/account/?from=profile");
        document.getElementById("profilepic").src = "/assets/img/account.svg";
        document.getElementById("profilepic").style = "opacity:1;";
        document.querySelector("body").classList.add("notloggedin");
        document.querySelector("body").classList.remove("loggedin");
    }
});


function logout(){
    firebase.auth().signOut().then(function() {
        showMessage("logged out successfully")
    }, function(error) {
        showMessage(error.message)
    });
}