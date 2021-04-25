
var failed = function(id,table,data) {
    firebase.database().ref("entity").orderByChild("id").equalTo(id).once("value",snapshot => {
        if (snapshot.exists()){
            console.log("exists!" + snapshot);
            querySender(table.two,data)
        }else {
            console.log("not exist")
            querySender(table.one,data)
        }
    });
}

var projectReciever = function(table){
    firebase.database().ref(table).on('value', function(snapshot) {
        snapshot.forEach ( function (childSnapshot) {
            if(childSnapshot.val()['status'] == true){
                var childData = childSnapshot.val();
                renderProjects(childData['name'],childData['address'])
            }
        });
    });
} 