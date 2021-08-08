async function setNewProject() {
    sessionVerification()
    var id = $("#pid").val()
    var name = $("#pname").val()
    var location = $("#plocation").val()
    var eth_address = $("#pethereum-adress").val()
    var legaldoc = $("#plegaldoc").val()
    var maxfounds = $("#pmaxfounds").val()
    var description = $("#pdescription").val()
    const table = {
        'one': 'failed_project',
        'two': 'project'
    }
    const data = {
        'id' : id,
        'name' : name,
        'location' : location,
        'eth_address' : eth_address,
        'legaldoc' : legaldoc,
        'status' : "for-confirmation",
        'balance': 0,
        'description' : description,
        'maxfounds' : maxfounds
    }
    if ((
        data.name && 
        data.id && 
        data.location && 
        data.eth_address && 
        data.legaldoc && 
        data.description &&
        data.maxfounds
        ) === "") {
        Materialize.toast('Faltan datos', 2000)
    }else {
        checkfailed(id,table,data) 
    }    
}