var sessionVerificationForActions = () => {
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            
        }else{
            setsigninview()
        }
    })   
}

var sessionVerificationForNavBar = () => {
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            const signedin = `
            <a class="blue-grey-text accent-2" href="javascript:;" onClick="signout()"><i class="material-icons">logout</i></a>
            `;
            clearContainer("dropdown1")
            clearContainer("sessionname")
            loadData( "sessionname", "<b>"+user.email+"</b>")
            loadData("dropdown1",signedin)
        }else{
            console.log("no hay ninguna sesión activa")
            const signedout = `
            <a class="blue-grey-text accent-2" href="javascript:;" onClick="setsigninview()"><i class="material-icons">login</i></a>
            <a class="blue-grey-text accent-2" href="javascript:;" onclick="setsignupview()"><i class="material-icons">how_to_reg</i>
            `;
            clearContainer("dropdown1")
            clearContainer("sessionname")
            loadData( "sessionname", "<b>Don anónimo</b>")
            loadData("dropdown1",signedout)
        }
    })   
}

var sessionVerificationForVisualization = () => {
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            loadData( "projectlogo", "<b>Ir a mis proyectos</b>")
            loadData( "approvedlogo", "<b>Ir a mis aprobadas</b>")
            loadData( "failedlogo", "<b>Ir a mis rechazadas</b>")
        }
    })
}



