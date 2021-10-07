var sendEditProject = () => {
    var parentid = $("#eparentid").val()
    var name = $("#epname").val()
    var location = $("#eplocation").val()
    var id = $("#epid").val()
    var eth_address = $("#epethereum-adress").val()
    var legaldoc = $("#eplegaldoc").val()
    var maxfounds = $("#epmaxfounds").val()
    var description = $("#epdescription").val()
    
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
