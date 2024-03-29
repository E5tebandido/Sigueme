var signin = () => {
    callFirebase()
    var email = document.getElementById("lemail").value
    var password = document.getElementById("lpassword").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
        console.log(user.user.emailVerified)
        if (user.user.emailVerified == true) {
            Materialize.toast("que hay de nuevo "+user.user.email , 2000, 'green')
            setseeprojectview()
        } else {
            setseenvview()
        }
    })
    .catch((error) => {
        var errorMessage = error.message;
        Materialize.toast(errorMessage, 4000, 'red')
    });
}

var googleSignin = () => {
    callFirebase()
    var provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(() => {
        setseeprojectview()
        Materialize.toast("Ingreso exitoso", 2000, 'green')
    })
    .catch((error) => {
        var errorMessage = error.message;
        Materialize.toast(errorMessage, 4000, 'red')
    });
}

var facebookSignin = () => {
    callFirebase()
    var provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(() => {
        Materialize.toast("Ingreso exitoso", 2000, 'green')
        setseeprojectview()
    })
    .catch((error) => {
        var errorMessage = error.message;
        Materialize.toast(errorMessage, 4000, 'red')
    });
}