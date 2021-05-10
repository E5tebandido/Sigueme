
var failed = function(id,table,data) {
    firebase.database().ref("entity").orderByChild("id").equalTo(id).once("value",snapshot => {
        if (snapshot.exists()){
            querySender(table.two,data)
        }else {
            Materialize.toast('No encontrado', 2000)
            querySender(table.one,data)
        }
    });
}

var projectRecieverRule = function(table){
    firebase.database().ref(table).on('value', function(snapshot) {
        snapshot.forEach ( function (childSnapshot) {
            if(childSnapshot.val()['status'] == true){
                var childData = childSnapshot.val();
                renderProjects(childData['name'],childData['address'])
            }
        });
    });
} 

var specificProjectRule = function(table,address) {
    firebase.database().ref(table).on('value', function(snapshot) {
        snapshot.forEach ( function (childSnapshot) {
            if(childSnapshot.val()['address'] == address){
                var childData = childSnapshot.val();
                settransactionview(childData['address'])
            }
        });
    });
}
