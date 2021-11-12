var sendProject = () => {
    let parentid = $("#parentid").val()
    let name = $("#pname").val()
    let location = $("#plocation").val()
    let id = idGenerator()
    let icon = a = loadIcon()
    let eth_address = $("#pethereum-adress").val()
    let legaldoc = $("#plegaldoc").val()
    let maxfounds = $("#pmaxfounds").val()
    let description = $("#pdescription").val()
    
    const table = {
        'approved': 'project',
        'failed': 'project_log'
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
        'maxfounds' : maxfounds,
        'icon' : icon
    }
    
    querySet (table.approved, data, id)
    buttonStatus("create_project", "disabled", true)
}
