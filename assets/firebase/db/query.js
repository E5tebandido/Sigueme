var querySender = function(table,data) {
    if (!firebase.apps.length) {
        firebaseInit()
    } 
    var userId = firebase.auth().currentUser.uid;
    console.log(userId)
    firebase.database().ref(table+"/"+userId).push(data)
    .then(function(){
        Materialize.toast('Solicitud almacenada en la base de datos', 3000, 'green')
    })
    .catch(function(){
        Materialize.toast('Solicitud rechazada',3000, 'red')
    });
}

