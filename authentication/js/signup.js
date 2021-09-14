var signup = () => {
    callFirebase()
    var email = document.getElementById("remail").value
    var password = document.getElementById("rpassword").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = "../index.html"
        })
        .catch((error) => {
            var errorMessage = error.message;
            Materialize.toast(errorMessage, 3000, 'red')
        });
}