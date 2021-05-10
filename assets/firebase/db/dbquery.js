var querySender = function(table,data) {
    firebase.database().ref(table).push(data)
    .then(function(){
        Materialize.toast('Transacción almacenada en ' + table, 3000)
    })
    .catch(function(){
        Materialize.toast('Transacción no almacenada', 2000)
    });
}

