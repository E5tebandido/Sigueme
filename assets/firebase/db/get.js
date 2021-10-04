var seeAllProjects = () => {
    firebase.database().ref('project').on('value', snapshot => {
        snapshot.forEach ( childSnapshotuser => {
            childSnapshotuser.forEach ( childSnapshotId => {
                
                    if(childSnapshotId.val()['status'] == "confirmed"){
                        var childData = childSnapshotId.val()
                        renderProjects(childData['name'],childData['id'],childData['balance'],childData['description'],childData['maxfounds'])
                    }
        
            })
        })
    })
}
 
var seeAllAproveds = () => {
    firebase.database().ref('tx').on('value', snapshot => {
        snapshot.forEach ( childSnapshotuser => {
            childSnapshotuser.forEach ( childSnapshotId => {
                childSnapshotId.forEach ( child => {
                    var childData = child.val()
                    renderAproveds(childData['blockHash'],childData['from'],childData['transactionHash'])
                })
            })
        })
    })
} 

var seeAllFaileds = () => {
    firebase.database().ref('tx_failed').on('value', snapshot => {
        snapshot.forEach ( childSnapshotuser => {
            childSnapshotuser.forEach ( childSnapshotId => {
                childSnapshotId.forEach ( child => {
                    var childData = child.val()
                    renderFaileds(childData['value'],childData['reason'],childData['transactionHash'])
                })
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


var seeMyProjects = () => {
    if (firebase.auth().currentUser !== null) {
        var userId = firebase.auth().currentUser.uid
        firebase.database().ref('project').child(userId).on("value", snapshot => {
            snapshot.forEach ( snapshotId => {
                var childData = snapshotId.val()
                renderMyProjects(childData['name'],childData['id'],childData['balance'],childData['description'],childData['maxfounds'])
            })
        })
    }
}

var seeMyFaileds = () => {
    if (firebase.auth().currentUser !== null) {
        var userId = firebase.auth().currentUser.uid
        firebase.database().ref('tx_failed').child(userId).on("value", snapshot => {
            snapshot.forEach ( snapshotId => {
                snapshotId.forEach ( child => {
                    var childData = child.val()
                    renderFaileds(childData['value'],childData['reason'],childData['transactionHash'])
                })
            })
        })
    }
}

var seeMyAproveds = () => {
    if (firebase.auth().currentUser !== null) {
        var userId = firebase.auth().currentUser.uid
        firebase.database().ref('tx/'+userId).child(userId).on("value", snapshot => {
            snapshot.forEach ( snapshotId => {
                snapshotId.forEach ( child => {
                    var childData = child.val()
                    renderAproveds(childData['blockHash'],childData['from'],childData['transactionHash'])
                })
            })
        })
    }
}

var seeMyEntities = () => {
    if (firebase.auth().currentUser !== null) {
        var userId = firebase.auth().currentUser.uid
        firebase.database().ref('entity').child(userId).on("value", snapshot => {
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
            $("#contentpage").load("templates/newproject.html", () => {
                let childData = snapshot.val() 
                formin('parentid',childData['parentid'])
                buttonStatus("parentid","disabled",true)
                formin('pname',childData['name'])
                formin('plocation',childData['location'])
                formin('pid',childData['id'])
                formin('pethereum-adress',childData['eth_address'])
                formin('pdescription',childData['description'])
                formin('pmaxfounds',childData['maxfounds'])
                formin('plegaldoc',childData['legaldoc'])
            })            
        })
    }
}
