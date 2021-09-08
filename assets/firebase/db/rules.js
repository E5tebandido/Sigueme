
var entityIdVerification = function(table,data)  {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('entity/'+userId).orderByChild("id").equalTo(data.id).once("value",snapshot => {
        if (!snapshot.exists()){
            Materialize.toast('Clave unica disponible', 4000, 'green')
            querySender(table.approved,data)
        }else {
            data.key = 'reason'
            data['reason'] = 'Clave unica no disponible'
            querySender(table.failed,data)
            Materialize.toast(data.reason, 4000, 'red')
        }
    });
}

var projectAccountVerification = function(table,data,eth) {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('project').child(userId).orderByChild("eth_address").equalTo(eth).once("value",snapshot => {
        if (!snapshot.exists()){
            Materialize.toast('Cuenta ethereum disponible', 4000, 'green')
            querySender(table.approved,data)
        }else {
            data['reason'] = 'Cuenta ethereum en uso'
            querySender(table.failed,data)
            Materialize.toast(data.reason, 4000, 'red')
        }
    })
}

var entityStatusVerification = function(table,data,id) {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('entity/'+userId).orderByChild("id").equalTo(id).once("value",snapshot => {
        snapshot.forEach ( function (childSnapshot) {
            if(childSnapshot.val()['status'] == "confirmed"){
                data.key = 'parent_name'
                data['parent_entity'] = childSnapshot.val()['name']
                Materialize.toast('Estado de la entidad  '+childSnapshot.val()['name']+' activo', 4000, 'green')
                var auxeth = data.eth_address 
                projectAccountVerification(table,data,auxeth)
            }else{
                data.key = 'reason'
                data['reason'] = 'Estado de la entidad inactivo'
                querySender(table.failed,data)
                Materialize.toast(data.reason, 4000, 'red')
            }
        });
    });
}

var project_entityIdVerification = function(table,data) {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('entity/'+userId).orderByChild("id").equalTo(data.parent_id).once("value",snapshot => {
        if (snapshot.exists()){
            Materialize.toast('Clave unica encontrada', 4000, 'green')
            var auxid = data.parent_id
            entityStatusVerification(table,data,auxid)
        }else {
            data.key = 'reason'
            data['reason'] = 'Clave unica no existe'
            querySender(table.failed,data)
            Materialize.toast(data.reason, 4000, 'red')
        }
    });
}


var projectStatusVerification = function() {
    firebase.database().ref('project').on('value', function(snapshot) {
        snapshot.forEach ( function (childSnapshotuser) {
            childSnapshotuser.forEach ( function (childSnapshot) {
                if(childSnapshot.val()['status'] == "confirmed"){
                    var childData = childSnapshot.val();
                    renderProjects(childData['name'],childData['eth_address'],childData['balance'],childData['description'],childData['maxfounds'])
                }
            })
        })
    })
}
 

var projectsAccountVerification = function(address) {
    firebase.database().ref('project').on('value', function(snapshot) {
        snapshot.forEach ( function (childSnapshotuser) {
            childSnapshotuser.forEach ( function (childSnapshot) {
                if(childSnapshot.val()['eth_address'] == address){
                    var childData = childSnapshot.val();
                    missingfounds = childData['maxfounds'] - childData['balance']
                    settransactionview(childData['eth_address'],childData['name'],childData['balance'],childData['location'],childData['description'],childData['maxfounds'], missingfounds)
                }
            })
        })
    })
}

var historialAprovedVerification = function(){
    firebase.database().ref('tx').on('value', function(snapshot) {
        snapshot.forEach ( function (childSnapshotuser) {
            childSnapshotuser.forEach ( function (childSnapshot) {
                var childData = childSnapshot.val();
                renderAproveds(childData['blockHash'],childData['from'],childData['transactionHash'])
            })
        })
    })
} 

var historialFailedVerification = function(){
    firebase.database().ref('tx_failed').on('value', function(snapshot) {
        snapshot.forEach ( function (childSnapshotuser) {
            childSnapshotuser.forEach ( function (childSnapshot) {
                var childData = childSnapshot.val();
                renderFaileds(childData['argument'],childData['code'],childData['transactionHash'])
            })
        })
    })
} 
