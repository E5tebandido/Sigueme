var signup = () => {
    callFirebase()
    var email = document.getElementById("remail").value
    var password = document.getElementById("rpassword").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            Materialize.toast("Registrado exitosamente", 2000, 'green')
            sethomeview()
        })
        .catch((error) => {
            var errorMessage = error.message;
            Materialize.toast(errorMessage, 4000, 'red')
        });
}