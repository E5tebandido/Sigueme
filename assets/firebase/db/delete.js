var deleteMyProject = (id) => {
    if (firebase.auth().currentUser !== null) {
        let userId = firebase.auth().currentUser.uid
        firebase.database().ref('project').child(userId).child(id).once("value",snapshot => {
            var childData = snapshot.val()
            childData["status"]= "deleted"
        })
    }
}

