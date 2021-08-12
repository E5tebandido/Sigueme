var querySender = function(table,data) {
    if (!firebase.apps.length) {
        firebaseInit()
    } 
    firebase.database().ref(table).push(data)
    .then(function(){
        Materialize.toast('Solicitud envíada y almacenada en' + table, 3000, 'green')
    })
    .catch(function(){
        Materialize.toast('Solicitud rechazada', 2000, 'red')
    });
}

