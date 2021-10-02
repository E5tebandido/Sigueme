var sendProject = () => {
    var parentid = $("#parentid").val()
    var name = $("#pname").val()
    var location = $("#plocation").val()
    var id = $("#pid").val()
    var eth_address = $("#pethereum-adress").val()
    var legaldoc = $("#plegaldoc").val()
    var maxfounds = $("#pmaxfounds").val()
    var description = $("#pdescription").val()
    
    const table = {
        'approved': 'project',
        'failed': 'failed_project'
    }
    
    const data = {
        'parentid' : parentid,
        'id' : id,
        'name' : name,
        'location' : location,
        'legaldoc' : legaldoc,
        'eth_address' : eth_address,
        'status' : "confirmed",
        'balance': 0,
        'description' : description,
        'maxfounds' : maxfounds
    }
    querySet (table.approved, data, id)
    resetForm("project-form")
}

