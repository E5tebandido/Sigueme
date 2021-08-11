var signin = () => {
    if (!firebase.apps.length) {
        firebaseInit()
    } 
    var email = document.getElementById("lemail").value
    var password = document.getElementById("lpassword").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        Materialize.toast('Hola de nuevo', 2500, 'green')
        setTimeout(function(){window.location.href = "../index.html"}, 2500)
        
    })
    .catch((error) => {
        var errorMessage = error.message;
        Materialize.toast(errorMessage, 3000, 'red')
    });
}

var googleSignin = () => {
    if (!firebase.apps.length) {
        firebaseInit()
    } 
    var provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(() => {
        Materialize.toast('Hola de nuevo', 2500, 'green')
        setTimeout(function(){window.location.href = "../index.html"}, 2500)
    })
    .catch((error) => {
        var errorMessage = error.message;
        Materialize.toast(errorMessage, 3000, 'red')
    });
}

var facebookSignin = () => {
    if (!firebase.apps.length) {
        firebaseInit()
    } 
    var provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(() => {
        Materialize.toast('Hola de nuevo', 2500, 'green')
        setTimeout(function(){window.location.href = "../index.html"}, 2500)
    })
    .catch((error) => {
        var errorMessage = error.message;
        Materialize.toast(errorMessage, 3000, 'red')
    });
}