var sessionVerificationForActions = () => {
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            console.log("sesión activa, solicitud aceptada", user.email)
        }else{
            setsigninview()
        }
    })   
}

var sessionVerificationForNavBar = () => {
    firebase.auth().onAuthStateChanged(user => {
        if(user){
            console.log("sesión activa")
            const signedin = `
            <li><a class=" blue-grey-text accent-2" href="javascript:;"><b>${user.email}</b><i class="material-icons">profile</i></a></li>
            <li><a class=" blue-grey-text accent-2" href="javascript:;" onClick="signout()"><b>Salir</b><i class="material-icons">logout</i></a></li>
            `;
            clearContainer("dropdown1")
            $("#dropdown1").append(signedin)
            $("#sessionlogo").attr('class', 'fas fa-user-astronaut fa-2x');
        }else{
            console.log("no hay ninguna sesión activa")
            const signedout = `
            <li><a class=" blue-grey-text accent-2" href="javascript:;" onClick="setsigninview()"><b>Ingresa</b><i class="material-icons">login</i></a></li>
            <li><a class=" blue-grey-text accent-2" href="javascript:;" onclick="setsignupview()"><b>Registrate</b><i class="material-icons">how_to_reg</i></li>
            `;
            clearContainer("dropdown1")
            $("#dropdown1").append(signedout)
            $("#sessionlogo").attr('class', 'fas fa-user-secret fa-2x')
        }
    })   
}

