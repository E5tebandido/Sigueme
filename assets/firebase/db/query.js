var querySender = function(table,data) {
    if (!firebase.apps.length) {
        firebaseInit()
    } 
    var userId = firebase.auth().currentUser.uid;
    console.log(userId)
    firebase.database().ref(table+"/"+userId).push(data)
    .then(function(){
        Materialize.toast('Solicitud envíada y almacenada en' + table, 3000, 'green')
    })
    .catch(function(){
        Materialize.toast('Solicitud rechazada', 2000, 'red')
    });
}

