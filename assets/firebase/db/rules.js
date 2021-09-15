
var entityIdVerification = (table,data) => {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('entity').child(userId).orderByChild("nit").equalTo(data.nit).once("value", snapshot => {
        if (!snapshot.exists()){
            querySender(table.approved,data)
            Materialize.toast('Nit disponible', 4000, 'green')
        }else {
            data['reason'] = 'Nit no disponible'
            querySender(table.failed,data)
            Materialize.toast('Nit en uso', 4000, 'red')
        }
    });
}

var projectAccountVerification = (table,data,eth) => {
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

var entityStatusVerification = (table,data,id) => {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('entity/'+userId).orderByChild("id").equalTo(id).once("value",snapshot => {
        snapshot.forEach ( function (childSnapshot) {
            if(childSnapshot.val()['status'] == "confirmed"){
                data['parent_entity'] = childSnapshot.val()['name']
                Materialize.toast('Estado de la ONG '+childSnapshot.val()['name']+' activo', 4000, 'green')
                var auxeth = data.eth_address 
                projectAccountVerification(table,data,auxeth)
            }else{
                data['reason'] = 'Estado de la ONG inactivo'
                querySender(table.failed,data)
                Materialize.toast(data.reason, 4000, 'red')
            }
        });
    });
}

var project_entityIdVerification = (table,data) => {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('entity/'+userId).orderByChild("id").equalTo(data.parentid).once("value",snapshot => {
        if (snapshot.exists()){
            Materialize.toast('La ONG con la clave ' +data.parentid+ ' existe', 4000, 'green')
            var auxid = data.parentid
            entityStatusVerification(table,data,auxid)
        }else {
            data['reason'] = 'Clave unica de la ONG no existe'
            querySender(table.failed,data)
            Materialize.toast(data.reason, 4000, 'red')
        }
    });
}


var projectStatusVerification = () => {
    firebase.database().ref('project').on('value', (snapshot) => {
        snapshot.forEach ( (childSnapshotuser) => {
            childSnapshotuser.forEach ( (childSnapshot) => {
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
