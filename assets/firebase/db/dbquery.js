var querySender = function(table,data) {
    firebase.database().ref(table).push(data)
    .then(function(){
        Materialize.toast('Solicitud envíada y almacenada en ' + table, 3000)
    })
    .catch(function(){
        Materialize.toast('Solicitud rechazada', 2000)
    });
}

