
var loadWebNavSignIn = (img) => {
     let data = `
    <li><a href="javascript:;" onclick="setseeprojectview()" style="margin-top: -0.2rem; color: white;">Dona ya!</a></li>
    <li><a href="javascript:;" style="margin-top: -0.2rem; color: gainsboro;">nosotros</a></li>
    <li><a href="javascript:;" data-activates="slide-out2" class="button-collapse2 show-on-large" style="margin-top: -0.2rem; color: gainsboro;">Mi cuenta <img class="circle" src="../assets/images/avatar2.png" style="height: 2.5rem; vertical-align: middle; margin-top: -0.3rem;"></a></li>
    <li><a id="navbutton" class="btn" onClick="signout()">Cerrar sesión</a></li>
     `;
     return data
}

var loadWebNavSignOut = () => {
    let data = `
    <li><a href="javascript:;" onclick="setseeprojectview()" style="margin-top: -0.2rem; color: white;">Dona ya!</a></li>
    <li><a href="javascript:;" style="margin-top: -0.2rem; color: gainsboro;">nosotros</a></li>
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
    <li><a href="javascript:;" onClick="setSeeMyProjects()">Mis proyectos<i class="material-icons black-text">recent_actors</i></a></li>
    <li><a href="javascript:;" onClick="setSeeMyAproveds()">Mis donaciones<i class="material-icons black-text">favorite_border</i></a></li>
    <li><div class="divider"></div></li>
    <li><a href="javascript:;"  onclick="sethistorialaprove()">Historial<i class="material-icons black-text">public</i></a></li> 
    `;
    return data
}
