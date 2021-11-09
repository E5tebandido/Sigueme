var signout = () => {
    callFirebase()
    firebase.auth().signOut()
    .then(() => {
        setsigninview()
        Materialize.toast("Salida exitosa", 2000, 'green')
    })
    .catch((error) => {
        var errorMessage = error.message;
        Materialize.toast(errorMessage, 4000, 'red')
    });
}