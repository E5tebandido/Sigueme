var seeAllProjects = (callback) => {
    firebase.database().ref('project').on('value', snapshot => {
        clearContainer("projectpanel")
        snapshot.forEach ( childSnapshotuser => {
            childSnapshotuser.forEach ( childSnapshotId => {
                if(childSnapshotId.val()['status'] == "confirmed"){
                    var childData = childSnapshotId.val()
                    renderProjects(childData['name'],childData['id'],childData['balance'],childData['description'],childData['maxfounds'])
                }
            })
        })
        callback()
    })
}
 
var seeAllAproveds = (callback) => {
    firebase.database().ref('tx').on('value', snapshot => {
        clearContainer("historialaprovepanel")
        snapshot.forEach ( childSnapshotuser => {
            childSnapshotuser.forEach ( childSnapshotId => {
                var childData = childSnapshotId.val()
                renderAproveds(childData['donator'],childData['amount'],childData['target'],childData['date'])
            })
        })
        callback()
    })
} 

var seeAllFaileds = () => {
    firebase.database().ref('tx_failed').on('value', snapshot => {
        clearContainer("historialfailedpanel")
        snapshot.forEach ( childSnapshotuser => {
            childSnapshotuser.forEach ( childSnapshotId => {
                var childData = childSnapshotId.val()
                renderFaileds(childData['donator'],childData['amount'],childData['target'],childData['date'])
            })
        })
    })
} 


var seeOneProject = (id) => {
    firebase.database().ref('project').on('value', snapshot => {
        snapshot.forEach ( childSnapshotuser => {
            childSnapshotuser.forEach ( childSnapshotId => {
                var childData = childSnapshotId.val()
                if(childData['id'] == id){
                    missingfounds = childData['maxfounds'] - childData['balance']
                    getOneProject(childData['eth_address'],childData['name'],childData['balance'],childData['location'],childData['description'],childData['maxfounds'], missingfounds)
                }      
            })
        })
    })
}


var seeMyProjects = (callback) => {
    if (firebase.auth().currentUser !== null) {
        var userId = firebase.auth().currentUser.uid
        firebase.database().ref('project').child(userId).on("value", snapshot => {
            clearContainer("projectpanel")
            snapshot.forEach ( snapshotId => {
                var childData = snapshotId.val()
                renderMyProjects(childData['name'],childData['id'],childData['balance'],childData['description'],childData['maxfounds'])
            })
        })
        callback()
    }
}

var seeMyFaileds = () => {
    if (firebase.auth().currentUser !== null) {
        var userId = firebase.auth().currentUser.uid
        firebase.database().ref('tx_failed').child(userId).on("value", snapshot => {
            clearContainer("historialfailedpanel")
            snapshot.forEach ( snapshotId => {
                var childData = snapshotId.val()
                renderFaileds(childData['donator'],childData['amount'],childData['target'],childData['date'])
            })
        })
    }
}

var seeMyAproveds = (callback) => {
    if (firebase.auth().currentUser !== null) {
        var userId = firebase.auth().currentUser.uid
        firebase.database().ref('tx').child(userId).on("value", snapshot => {
            clearContainer("historialaprovepanel")
            snapshot.forEach ( snapshotId => {
                var childData = snapshotId.val()
                renderAproveds(childData['donator'],childData['amount'],childData['target'],childData['date'])
            })
        })
        callback()
    }
}

var seeMyEntities = () => {
    if (firebase.auth().currentUser !== null) {
        var userId = firebase.auth().currentUser.uid
        firebase.database().ref('entity').child(userId).on("value", snapshot => {
            clearContainer("entitypanel")
            snapshot.forEach ( child => {
                var childData = child.val()
                renderMyEntities(childData['name'],childData['id'],childData['status'])
            })
        })
    }
}

var editMyProject = (id) => {
    if (firebase.auth().currentUser !== null) {
        let userId = firebase.auth().currentUser.uid
        firebase.database().ref('project').child(userId).child(id).once("value",snapshot => {
            $("#contentpage").load("templates/editproject.html", () => {
                let childData = snapshot.val() 
                formin('eparentid',childData['parentid'])
                buttonStatus("eparentid","disabled",true)
                buttonStatus("epid","disabled",true)
                formin('epname',childData['name'])
                formin('eplocation',childData['location'])
                formin('epid',childData['id'])
                formin('epethereum-adress',childData['eth_address'])
                formin('epdescription',childData['description'])
                formin('epmaxfounds',childData['maxfounds'])
                formin('eplegaldoc',childData['legaldoc'])
            })            
        })
    }
}
