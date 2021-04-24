async function setNewEntity() {
    var name = $("#entity_name").val();
    var id = $("#entity_id").val();
    const table = {
        'one' : 'entity',
        'two' : 'failed_entity'
    }
    const data = {
        'id' : id,
        'name' : name,
        'status' : false
    }
    var checkrule = failed(id,table,data) 
}



    
    
