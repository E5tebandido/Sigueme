async function setNewProject() {
    var id = $("#pid").val();
    var name = $("#pname").val();
    var location = $("#plocation").val();
    var eth_address = $("#pethereum-adress").val();
    var legaldoc = $("#plegal-document").val();
    var maxfounds = $("#pmaxfounds").val();
    var description = $("#pdescription").val();
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
    var checkrule = failed(id, table, data)
        
}