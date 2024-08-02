firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("displayMail").value = user.email;
        document.getElementById("displayName").value = user.displayName;
    }
});





deleteuserPic = 0
uploadPic = 0

function chooseProfileImage(e){
    file = e.target.files[0];
    uploadPic = 1
    deleteuserPic = 0
    readImage(file)
    console.log(file)
}

const dropArea = document.getElementById('profilepic');
dropArea.addEventListener('dragover', (event) => {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
});

dropArea.addEventListener('drop', (event) => {
    event.stopPropagation();
    event.preventDefault();
    fileList = event.dataTransfer.files;
    file = fileList[0]
    uploadPic = 1
    deleteuserPic = 0
    readImage(file)
});






function readImage(file) {
    if (file.type && !file.type.startsWith('image/jpeg')) {
      console.log('File is not an image.', file.type, file);
      return;
    }
  
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        document.getElementById("profilepic").src = event.target.result;
    });
    reader.readAsDataURL(file);
  }






function deletePic(){
    deleteuserPic = 1
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            document.getElementById("profilepic").src = "https://avatars.dicebear.com/api/initials/" + user.email + ".svg?background=transparent";
            document.getElementById("profilepic").style = "background:linear-gradient(330deg, #0069ff, #00ccff)";
        }
    });
}




function uploadProfile(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            if (deleteuserPic == 1){
                const storageRef = firebase.storage().ref();
                var desertRef = storageRef.child('users/' + user.uid + '/profile.jpg');
                desertRef.delete().then(() => {
                    showMessage("profile picture successfully deleted");
                }).catch((error) => {
                    showMessage(error.message);
                });
            }  else if (uploadPic == 1){
                firebase.storage().ref('users/' + user.uid + '/profile.jpg').put(file).then( function() {
                    showMessage("profile picture successfully uploaded");
                }).catch(error => {
                    showMessage(error.message);
                })
            }
            dname = document.getElementById('displayName')
            if (dname.value != ''){
                user.updateProfile({
                    displayName: dname.value,
                  }).then(() => {
                    showMessage("profile successfully uploaded");
                  }).catch((error) => {
                    showMessage(error.message);
                  });  
            }
        }
    });
}


function newPassword(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            auth.sendPasswordResetEmail(user.email)
            .then(function() {
                showMessage("Reset Email successfully sent");
            })
            .catch(function(error) {
                showMessage(error.message);
            });
        }
    })
}




//snackbar
function showMessage(message) {
    var x = document.getElementById("snackbar");
    x.innerHTML = message;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4000);
}





var d = new Date(1658695154365);
//verschiebt bei Login time eins nach hinten
let day = d.toString()
document.getElementById("demo").innerHTML = day;