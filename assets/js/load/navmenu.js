var loadWebNav = () => {
     let data = `
     
     `;
     return data
}

var loadMovNav = () => {
    let data = `
     
    `;
    return data
}

var loadWebBred = (user,img) => {
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
    <li><a href="javascript:;" class="breaditem" onclick="setseeprojectview()"><b><i class="far fa-heart"></i></b></a></li>
    <li><div class="divider"></div></li>
    <li><a href="javascript:;" class="breaditem" onclick="sethistorialaprove()"><b><i class="fas fa-seedling"></i></b></a></li>
    <li><a href="javascript:;" class="breaditem" onclick="sethistorialfailed()"><b><i class="fas fa-skull-crossbones"></i></b></a></li>
    `;
    return data
}
