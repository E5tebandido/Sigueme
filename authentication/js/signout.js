var signout = () => {
    callFirebase()
    firebase.auth().signOut()
    .then(() => {
        Materialize.toast("Salida exitosa", 2000, 'green')
        sethomeview()
    })
    .catch((error) => {
        var errorMessage = error.message;
        Materialize.toast(errorMessage, 4000, 'red')
    });
}