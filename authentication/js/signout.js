var signout = () => {
    callFirebase()
    firebase.auth().signOut()
    .then(() => {
        window.location.href = "../index.html"
    })
    .catch((error) => {
        var errorMessage = error.message;
        Materialize.toast(errorMessage, 3000, 'red')
    });
}