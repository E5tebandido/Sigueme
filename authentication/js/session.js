var sessionVerification = () => {
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            console.log(user)
        }else{
            console.log("Por favor inicia sesión")
            window.location.href = "templates/signin.html";
        }
    })   
}