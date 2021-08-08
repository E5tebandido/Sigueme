var signout = () => {
    firebaseInit()
    firebase.auth().signOut()
    .then(() => {
        console.log("signout")
        window.location.href = "../index.html"
    })
    .catch((error) => {
        var errorMessage = error.message;
        Materialize.toast(errorMessage, 3000)
    });
}