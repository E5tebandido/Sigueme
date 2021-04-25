var querySender = function(table,data) {
    firebase.database().ref(table).push(data)
    .then(function(){
        console.log('mensaje guardado');
    })
    .catch(function(){
        console.log('mensaje No guardado'); 
    });
}

