var sendEntity = () => {
    var name = $("#ename").val()
    var nit = $("#enit").val()
    var id = idGenerator()
    var phone = $("#ephone").val()
    var cel = $("#ecel").val()
    var email = $("#eemail").val()
    var url = $("#eurl").val()
    var facebook = $("#efa").val()
    var instagram = $("#ein").val()
    var legaldoc = $("#elegaldoc").val()
    var personaldoc = $("#epersonaldoc").val()

    const table = {
        'approved' : 'entity',
        'failed' : 'failed_entity'
    }
    
    const data = {
        'nit' : nit,
        'id' : id,
        'name' : name,
        'phone' : phone,
        'cel' : cel,
        'email' : email,
        'url' : url,
        'facebook' : facebook,
        'instagram' : instagram,
        'legaldoc' : legaldoc,
        'personaldoc' : personaldoc,
        'status' : "confirmed",
        'balance' : 0
    }  
    querySet (table.approved, data, id)
    resetForm("ong-form")
}



    
    
