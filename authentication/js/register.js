var register = () => {
    firebaseInit()
    var email = document.getElementById("remail").value
    var password = document.getElementById("rpassword").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            Materialize.toast('Registrado exitosamente', 3000)
            var user = userCredential.user;
            console.log(userCredential)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            Materialize.toast('Ese usuario ya existe', 3000)
        });
}