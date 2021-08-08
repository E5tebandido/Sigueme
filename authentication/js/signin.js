var signin = () => {
    firebaseInit()
    var email = document.getElementById("lemail").value
    var password = document.getElementById("lpassword").value
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        Materialize.toast('Ingereso exitoso', 3000)
        var user = userCredential.user;
        console.log(user.uid)
        window.location.href = "../index.html"
    })
    .catch((error) => {
        var errorMessage = error.message;
        Materialize.toast(errorMessage, 3000)
    });
}