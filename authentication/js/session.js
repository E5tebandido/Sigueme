var sessionVerificationForActions = () => {
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            console.log("sesión activa, solicitud aceptada", user.email)
        }else{
            window.location.href = "templates/signin.html";
       
        }
    })   
}

var sessionVerificationForNavBar = () => {
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            console.log("sesión activa")
            const signedin = `
            <li><a class=" blue-grey-text accent-2" href="templates/signout.html"><b>signout</b><i class="material-icons">logout</i></li>
            <li><a class=" blue-grey-text accent-2" href="javascript:;" onclick="setProfile()"><b>Perfil</b><i class="material-icons">how_to_reg</i></li>
            `;
            $("#dropdown1").append(signedin)
            $("#sessionname").append("<b> Hey "+user.email+"</b>")
            $("#sessionlogo").attr('class', 'fas fa-user-astronaut');
        }else{
            console.log("no hay ninguna sesión activa")
            const signedout = `
            <li><a class=" blue-grey-text accent-2" href="templates/signin.html"><b>signin</b><i class="material-icons">login</i></a></li>
            <li><a class=" blue-grey-text accent-2" href="templates/signup.html"><b>signup</b><i class="material-icons">how_to_reg</i></li>
            `;
            $("#dropdown1").append(signedout)
            $("#sessionname").append("<b> Hey Anonimo! </b>")
            $("#sessionlogo").attr('class', 'fas fa-user-secret')
        }
    })   
}