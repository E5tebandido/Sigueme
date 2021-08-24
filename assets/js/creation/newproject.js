var sendProject = () => {
    var id = $("#pid").val()
    var name = $("#pname").val()
    var location = $("#plocation").val()
    var eth_address = $("#pethereum-adress").val()
    var legaldoc = $("#plegaldoc").val()
    var maxfounds = $("#pmaxfounds").val()
    var description = $("#pdescription").val()
    var id_for_update = 'up'+eth_address
    var id_for_delete = 'del'+eth_address
    
    const table = {
        'approved': 'project',
        'failed': 'failed_project'
    }
    
    const data = {
        'parent_id' : id,
        'id_for_update' : id_for_update,
        'id_for_delete' : id_for_delete,
        'name' : name,
        'location' : location,
        'eth_address' : eth_address,
        'legaldoc' : legaldoc,
        'status' : "for-confirmation",
        'balance': 0,
        'description' : description,
        'maxfounds' : maxfounds
    }
    project_entityIdVerification(table,data)
    $("#project-form").trigger("reset")
}

