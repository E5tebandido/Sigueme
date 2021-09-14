var signin = () => {
    callFirebase()
    var email = document.getElementById("lemail").value
    var password = document.getElementById("lpassword").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        window.location.href = "../index.html"   
    })
    .catch((error) => {
        var errorMessage = error.message;
        Materialize.toast(errorMessage, 3000, 'red')
    });
}

var googleSignin = () => {
    callFirebase()
    var provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(() => {
        window.location.href = "../index.html"
    })
    .catch((error) => {
        var errorMessage = error.message;
        Materialize.toast(errorMessage, 3000, 'red')
    });
}

var facebookSignin = () => {
    callFirebase()
    var provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(() => {
        window.location.href = "../index.html"
    })
    .catch((error) => {
        var errorMessage = error.message;
        Materialize.toast(errorMessage, 3000, 'red')
    });
}