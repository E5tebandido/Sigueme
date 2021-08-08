async function setNewEntity() {
    sessionVerification()
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
   
    const table = {
        'one' : 'entity',
        'two' : 'failed_entity'
    }
    
    const data = {
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
        'status' : "for-confirmation",
        'balance' : 0
    }
    
    if ((
        data.name && 
        data.id && 
        data.phone && 
        data.cel && 
        data.email && 
        data.legaldoc &&
        data.personaldoc
        ) === "") {
        Materialize.toast('Faltan datos', 2000)
    }else {
        checkfailed(id,table,data) 
    }

    
}



    
    
