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
            console.log(user.email)
            clearContainer("slide-out2")
            clearContainer("navbar-web-panel")
            clearContainer("navbar-mov-panel")
            loadData("slide-out2",loadBred(user.email,loadIcon()))
            loadData("navbar-web-panel",loadWebNavSignIn())
            loadData("navbar-mov-panel",loadMovNavSignIn())
        } else {
            console.log("no user")
            clearContainer("slide-out2")
            clearContainer("navbar-web-panel")
            clearContainer("navbar-mov-panel")
            loadData("slide-out2",loadBred("anonimoo","../assets/images/anonymus.jpg"))
            loadData("navbar-web-panel",loadWebNavSignOut())
            loadData("navbar-mov-panel",loadMovNavSignOut())    
        }
    })   
}



