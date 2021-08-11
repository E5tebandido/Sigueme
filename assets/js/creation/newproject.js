async function setNewProject() {
    var id = $("#pid").val()
    var name = $("#pname").val()
    var location = $("#plocation").val()
    var eth_address = $("#pethereum-adress").val()
    var legaldoc = $("#plegaldoc").val()
    var maxfounds = $("#pmaxfounds").val()
    var description = $("#pdescription").val()
    const table = {
        'approved': 'project',
        'failed': 'failed_project'
    }
    const data = {
        'entity_id' : id,
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
        Materialize.toast('Faltan datos', 2000, 'red')
    }else {
        projectCheckFailed(id,table,data) 
    }    
}

