var clearContainer = (contenedor) => {
    let a = $("#"+contenedor)
    a.empty()
}

var buttonStatus = (idbutton,status) => {
    $("#"+idbutton).attr("disabled",status)
} 