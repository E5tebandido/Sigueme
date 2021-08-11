var signup = () => {
    if (!firebase.apps.length) {
        firebaseInit()
    } 
    var email = document.getElementById("remail").value
    var password = document.getElementById("rpassword").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            Materialize.toast('Registrado con éxito '+ email, 2500, 'green')
            setTimeout(function(){window.location.href = "../index.html"}, 2500)
        })
        .catch((error) => {
            var errorMessage = error.message;
            Materialize.toast(errorMessage, 3000, 'red')
        });
}