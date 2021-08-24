var sendEntity = () => {
    var name = $("#ename").val()
    var id = $("#eid").val()
    var phone = $("#ephone").val()
    var cel = $("#ecel").val()
    var email = $("#eemail").val()
    var url = $("#eurl").val()
    var facebook = $("#efa").val()
    var instagram = $("#ein").val()
    var legaldoc = $("#elegaldoc").val()
    var personaldoc = $("#epersonaldoc").val()
    var id_for_update = 'up'+id
    var id_for_delete = 'del'+id 

    const table = {
        'approved' : 'entity',
        'failed' : 'failed_entity'
    }
    
    const data = {
        'id' : id,
        'id_for_update' : id_for_update,
        'id_for_delete' : id_for_delete,
        'name' : name,
        'phone' : phone,
        'cel' : cel,
        'email' : email,
        'url' : url,
        'facebook' : facebook,
        'instagram' : instagram,
        'legaldoc' : legaldoc,
        'personaldoc' : personaldoc,
        'status' : "for-confirmation",
        'balance' : 0
    }  
    entityIdVerification(table,data) 
    $("#ong-form").trigger("reset")
}



    
    
