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

