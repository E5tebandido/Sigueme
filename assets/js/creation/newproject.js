async function setNewProject() {
    var id = $("#parent_id").val();
    var address = $("#project_address").val();
    var name = $("#project_name").val();
    const table = {
        'one': 'failed_project',
        'two': 'project'
    }
    const data = {
        'id' : id,
        'address' : address,
        'name' : name,
        'status' : false
    }
    var checkrule = failed(id, table, data)
        
}