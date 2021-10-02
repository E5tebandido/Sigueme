var clearContainer = (contenedor) => {
    let a = $("#"+contenedor)
    a.empty()
}

var buttonStatus = (idbutton,attr,status) => {
    $("#"+idbutton).attr(attr,status)
} 

var loadData = (container,data) => {
    $("#"+container).append(data)
}

var formin = (container,value) => {
    $("#"+container).val(value)
}
