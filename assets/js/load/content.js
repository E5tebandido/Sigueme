function contentLoader(contenedor,script) {
    let a = $("#"+contenedor)
    a.empty()
    a.load(script)       
}
