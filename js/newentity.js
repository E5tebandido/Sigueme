async function setNewEntity() {
    var name = $("#entity_name").val();
    var id = $("#entity_id").val();
    const data = {
        'id' : id,
        'name' : name,
        'status' : false
    }
    try {
        saveEntity(data)
    } catch (error) {
        console.log("Transaction failed" + error);
    }  
}



    
    
