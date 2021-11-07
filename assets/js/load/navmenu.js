var loadWebNavSignIn = () => {
     let data = `
     <li><a href="javascript:;" onClick="setSeeMyProjects()" style="margin-top: -0.2rem; color: gainsboro;">Mis proyectos</a></li>
     <li><a href="javascript:;" onClick="setSeeMyAproveds()" style="margin-top: -0.2rem; color: gainsboro;">Mis donaciones</a></li>
     <li><a href="javascript:;" onClick="setSeeMyFaileds()" style="margin-top: -0.2rem; color: gainsboro;">Mis intentos fallidos</a></li>
     <li><a id="navbutton" class="btn" onClick="signout()">Cerrar sesión</a></li>
     `;
     return data
}

var loadWebNavSignOut = () => {
    let data = `
    <li><a href="javascript:;" onClick="setsignupview()" style="margin-top: -0.2rem; color: gainsboro;">registrate</a></li>
    <li><a id="navbutton" class="btn" onClick="setsigninview()">Iniciar sesión</a></li>
    `;
    return data
}

var loadMovNavSignIn = () => {
    let data = `
    <li><a href="javascript:;" onClick="signout()"><i class="fas fa-sign-out-alt"></i></a></li>
    `;
    return data
}

var loadMovNavSignOut = () => {
    let data = `
    <li><a href="javascript:;" onClick="setsigninview()"><i class="fas fa-sign-in-alt"></i></a></li>
    `;
    return data
}

var loadBred = (user,img) => {
    let data = `
    <li>
        <div class="user-view">
        <div class="background">
            <img src="../assets/images/bogota.png" width="100%" style="filter: brightness(35%);">
        </div>
        <a href="javascript:;"><img class="circle" src="${img}"></a>
        <a href="javascript:;"><span class="white-text name"><b>Hola!</b></span></a>
        <input type="text" class="grey-text text-lighten-3" value="${user}" style="border-bottom: white;" readonly>
        </div>
    </li>
    <li><a href="javascript:;" onclick="setseeprojectview()">Dona ya!<i class="material-icons black-text">favorite_border</i></a></li>
    <li><div class="divider"></div></li>
    <li><a href="javascript:;"  onclick="sethistorialaprove()">Aprobadas por la red<i class="material-icons black-text">done_all</i></a></li>
    <li><a href="javascript:;"  onclick="sethistorialfailed()">Rechazadas por la red<i class="material-icons black-text">thumb_down_off_alt</i></a></li>    
    `;
    return data
}
