
var entityIdVerification = function(table,data)  {
    firebase.database().ref("entity").orderByChild("id").equalTo(data.id).once("value",snapshot => {
        if (!snapshot.exists()){
            Materialize.toast('Clave unica disponible', 4000, 'green')
            querySender(table.approved,data)
        }else {
            Materialize.toast('Clave unica no disponible', 4000, 'red')
            querySender(table.failed,data)
        }
    });
}

var projectAccountVerification = function(table,data,eth) {
    firebase.database().ref("project").orderByChild("eth_address").equalTo(eth).once("value",snapshot => {
        if (!snapshot.exists()){
            Materialize.toast('Cuenta ethereum disponible', 4000, 'green')
            querySender(table.approved,data)
        }else {
            Materialize.toast('Cuenta ethereum en uso', 4000, 'red')
            querySender(table.failed,data)
        }
    });
}

var entityStatusVerification = function(table,data,id) {
    firebase.database().ref("entity").orderByChild("id").equalTo(id).once("value",snapshot => {
        snapshot.forEach ( function (childSnapshot) {
            if(childSnapshot.val()['status'] == "confirmed"){
                Materialize.toast('Estado de la entidad  '+childSnapshot.val()['name']+' activo', 4000, 'green')
                var auxeth = data.eth_address 
                projectAccountVerification(table,data,auxeth)
            }else{
                Materialize.toast('Estado de la entidad inactivo', 4000, 'red')
                querySender(table.failed,data)
            }
        });
    });
}

var project_entityIdVerification = function(table,data) {
    firebase.database().ref("entity").orderByChild("id").equalTo(data.entity_id).once("value",snapshot => {
        if (snapshot.exists()){
            Materialize.toast('Clave unica encontrada', 4000, 'green')
            var auxid = data.entity_id
            entityStatusVerification(table,data,auxid)
        }else {
            querySender(table.failed,data)
            Materialize.toast('Clave unica no existe', 4000, 'red')
        }
    });
}


var projectStatusVerification = function() {
    firebase.database().ref('project').on('value', function(snapshot) {
        snapshot.forEach ( function (childSnapshot) {
            if(childSnapshot.val()['status'] == "confirmed"){
                var childData = childSnapshot.val();
                renderProjects(childData['name'],childData['eth_address'],childData['balance'],childData['description'],childData['maxfounds'])
            }
        });
    });
} 

var projectsAccountVerification = function(address) {
    firebase.database().ref('project').on('value', function(snapshot) {
        snapshot.forEach ( function (childSnapshot) {
            if(childSnapshot.val()['eth_address'] == address){
                var childData = childSnapshot.val();
                missingfounds = childData['maxfounds'] - childData['balance']
                settransactionview(childData['eth_address'],childData['name'],childData['balance'],childData['location'],childData['description'],childData['maxfounds'], missingfounds)
            }
        });
    });
}

var historialAprovedVerification = function(){
    firebase.database().ref('transaction').on('value', function(snapshot) {
        snapshot.forEach ( function (childSnapshot) {
            var childData = childSnapshot.val();
            renderAproveds(childData['blockhash'],childData['contract_address'],childData['origin_account'],childData['project_address'], childData['transaction_amount'],childData['transaction_hash'])
        });
    });
} 

var historialFailedVerification = function(){
    firebase.database().ref('failed_transaction').on('value', function(snapshot) {
        snapshot.forEach ( function (childSnapshot) {
            var childData = childSnapshot.val();
            renderFaileds(childData['argument'],childData['code'],childData['transactionHash'])
        });
    });
} 