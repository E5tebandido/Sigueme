var signout = () => {
    if (!firebase.apps.length) {
        firebaseInit()
    } 
    firebase.auth().signOut()
    .then(() => {
        Materialize.toast('Adiós', 1500, 'green')
        setTimeout(function(){window.location.href = "../index.html"}, 1500)
    })
    .catch((error) => {
        var errorMessage = error.message;
        Materialize.toast(errorMessage, 3000, 'red')
    });
}