var signup = () => {
    callFirebase()
    let email = document.getElementById("remail").value
    let password = document.getElementById("rpassword").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user.user.emailVerified)
            emailVerification(user.user)
        })
        .catch((error) => {
            var errorMessage = error.message;
            Materialize.toast(errorMessage, 4000, 'red')
        });
}