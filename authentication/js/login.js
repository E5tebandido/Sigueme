var login = () => {
    firebaseInit()
    var email = document.getElementById("lemail").value
    var password = document.getElementById("lpassword").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        Materialize.toast('Registrado exitosamente', 3000)
        var user = userCredential.user;
        console.log(user.uid)
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Materialize.toast('Datos erroneos', 3000)
    });
}