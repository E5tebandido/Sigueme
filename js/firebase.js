function saveEntity(entitydata) {
    firebase.database().ref('entity').push(entitydata)
    .then(function(){
        alert('mensaje guardado');
    })
    .catch(function(){
        alert('mensaje No guardado'); 
    });
}

function saveTransaction(transactiondata) {
    firebase.database().ref('transaction').push(transactiondata)
    .then(function(){
        alert('mensaje guardado');
    })
    .catch(function(){
        alert('mensaje No guardado'); 
    });
}

function saveProject(projectdata,id) {
    firebase.database().ref('entity')
    .on('value', (snapshot) => {
        snapshot.forEach(function(childSnapshot) {
            if(id == childSnapshot.val()['id']){
                firebase.database().ref('project').push(projectdata)
                .then(function(){
                    alert('mensaje guardado');
                })
                .catch(function(){
                    alert('mensaje No guardado'); 
                });
            }
        });
    });
}


function getEntities(){
    var entities = []
    firebase.database().ref('entity')
    .on('value', (snapshot) => {
        snapshot.forEach(function(childSnapshot) {
           entities.push(childSnapshot.val()) 
        });
    });
    return entities
}
