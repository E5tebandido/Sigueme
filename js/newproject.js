async function setNewProject() {
    var id = $("#project_id").val();
    var address = $("#project_address").val();
    var name = $("#project_name").val();
    const data = {
        'id' : id,
        'address' : address,
        'name' : name,
        'status' : false
    }
    try {
        saveProject(data,id)
    } catch (error) {
        console.log("Transaction failed" + error);
    } 
}