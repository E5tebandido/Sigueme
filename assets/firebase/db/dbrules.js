
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