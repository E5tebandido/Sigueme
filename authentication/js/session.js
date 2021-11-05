var sessionVerificationForActions = () => {
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            if (user.emailVerified == true) {
                console.log("verificado")
            } else {
                setseenvview()
            }
        }else{
            setsigninview()
        }
    })   
}

var sessionVerificationForNavBar = () => {
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            clearContainer("slide-out2")
            loadData("slide-out2",loadWebBred(user.email,loadIcon()))
            

            clearContainer("navbarsignout")
            clearContainer("navbarong")
            clearContainer("navbarproject")
            clearContainer("navbarsignin")
            clearContainer("navbarsignup")
            loadData("navbarong",'<a href="javascript:;" class="navitem" onclick="setnewentityview()">Inscribír Ong</a>')
            loadData("navbarproject",'<a href="javascript:;" class="navitem" onclick="setseeentitiyview()">Crear proyecto</a>')
            loadData( "sessionname", "<b><i class='fas fa-user-astronaut'></i></b>")
            loadData("dropdown1",user.email)
            loadData("navbarsignout",'<a class="navitem hide-on-large-only" href="javascript:;" onClick="signout()"><b><i class="fas fa-sign-out-alt"></i></b></a>')
        } else {
            clearContainer("slide-out2")
            loadData("slide-out2",loadWebBred("anonimoo","../assets/images/anonymus.jpg"))

            clearContainer("dropdown1")
            clearContainer("sessionname")
            clearContainer("navbarsignout")
            clearContainer("navbarong")
            clearContainer("navbarproject")
            clearContainer("navbarsignin")
            clearContainer("navbarsignup")
            loadData("navbarsignin",'<a class="navitem" href="javascript:;" onClick="setsigninview()"><b><i class="fas fa-sign-in-alt"></i></b></a>')
            loadData( "sessionname", "<b><i class='fas fa-ghost'></i></b>")
            loadData("dropdown1","Anónimo")
        }
    })   
}

var sessionVerificationForVisualization = () => {
    firebase.auth().onAuthStateChanged(user => {
        if(user) {
            loadData( "projectlogo", '<b><i class="far fa-edit fa-3x"></i></b>')
            loadData( "approvedlogo", '<b><i class="far fa-edit fa-3x"></i></b>')
            loadData( "failedlogo", '<b><i class="far fa-edit fa-3x"></i></b>')
        }
    })
}



