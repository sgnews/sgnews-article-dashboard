function save() {
    var articleName = document.getElementById('dataview').value
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var user = auth.currentUser
            uniqueID = user.uid + "_" + Date.now()
          
            database.ref('articles/' + uniqueID + '_' + articleName).set({
              dataview : articleName,
            })
          
            alert('Saved')
        }
    });

  }
  
  function get() {
    var username = document.getElementById('username').value
  
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
  
      alert(data.email)
  
    })
  
  }
  
  function update() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
  
    var updates = {
      email : email,
      password : password
    }
  
    database.ref('users/' + username).update(updates)
  
    alert('updated')
  }
  
  function remove() {
    var username = document.getElementById('username').value
  
    database.ref('users/' + username).remove()
  
    alert('deleted')
  }



  alert("this is a test".split(" ").join("-"));