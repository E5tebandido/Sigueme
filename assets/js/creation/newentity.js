async function setNewEntity() {
    var name = $("#ename").val();
    var id = $("#eid").val();
    var phone = $("#ephone").val();
    var url = $("#eurl").val();
    var legaldoc = $("#elegal-document").val();
    const table = {
        'one' : 'entity',
        'two' : 'failed_entity'
    }
    const data = {
        'id' : id,
        'name' : name,
        'phone' : phone,
        'url' : url,
        'legaldoc' : legaldoc,
        'status' : "for-confirmation",
        'balance' : 0
    }
    var checkrule = failed(id,table,data) 
}



    
    
