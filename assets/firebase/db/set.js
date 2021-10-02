var querySet = function(table, data, id) {
    callFirebase()
    userId = firebase.auth().currentUser.uid
    firebase.database().ref(table+"/"+userId).child(id).set(data)
    .then(function(){
        Materialize.toast('Solicitud almacenada en la base de datos', 3000, 'green')
    })
    .catch(function(){
        Materialize.toast('Solicitud rechazada',3000, 'red')
    });
}



