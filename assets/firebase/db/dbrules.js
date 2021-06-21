
var failed = function(id,table,data) {
    firebase.database().ref("entity").orderByChild("id").equalTo(id).once("value",snapshot => {
        if (snapshot.exists()){
            querySender(table.two,data)
        }else if (!snapshot.exists()) {
            querySender(table.one,data)
        }
    });
}

var projectRecieverRule = function(table){
    firebase.database().ref(table).on('value', function(snapshot) {
        snapshot.forEach ( function (childSnapshot) {
            if(childSnapshot.val()['status'] == "confirmed"){
                var childData = childSnapshot.val();
                renderProjects(childData['name'],childData['eth_address'])
            }
        });
    });
} 

var specificProjectRule = function(table,address) {
    firebase.database().ref(table).on('value', function(snapshot) {
        snapshot.forEach ( function (childSnapshot) {
            if(childSnapshot.val()['eth_address'] == address){
                var childData = childSnapshot.val();
                settransactionview(childData['eth_address'])
            }
        });
    });
}

var historialAproveRule = function(table){
    firebase.database().ref(table).on('value', function(snapshot) {
        snapshot.forEach ( function (childSnapshot) {
            var childData = childSnapshot.val();
            renderAproveds(childData['blockhash'],childData['contract_address'],childData['origin_account'],childData['project_address'], childData['transaction_amount'],childData['transaction_hash'])
        });
    });
} 

var historialFailedRule = function(table){
    firebase.database().ref(table).on('value', function(snapshot) {
        snapshot.forEach ( function (childSnapshot) {
            var childData = childSnapshot.val();
            renderFaileds(childData['argument'],childData['reason'],childData['value'])
        });
    });
} 