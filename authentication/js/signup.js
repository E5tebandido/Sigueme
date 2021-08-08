var signup = () => {
    firebaseInit()
    var email = document.getElementById("remail").value
    var password = document.getElementById("rpassword").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            Materialize.toast('Registrado '+ email, 3000)
            var user = userCredential.user;
            console.log(user.uid)
            window.location.href = "../index.html"
        })
        .catch((error) => {
            var errorMessage = error.message;
            Materialize.toast(errorMessage, 3000)
        });
}