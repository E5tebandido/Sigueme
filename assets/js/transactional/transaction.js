var Tx = async (amount, address, name, curaccount, instance) => {
    try {  
        await instance.methods.make_transaction(amount, address, true, true)
        .send({ 
                from: curaccount
            })
            .then( function(tx) {   
                if (firebase.auth().currentUser !== null) {
                    var useremail = firebase.auth().currentUser.email
                    tx['donator'] = useremail
                }
                
                tx['target'] = address
                tx['amount'] = amount
                tx['date'] = dateGenerator()
                tx['hour'] = hourGenerator()
                tx['projectname'] = name
                let id = idGenerator()
                querySet ("tx", tx, id)
                Materialize.toast("Transacción aprobada número : " + tx.transactionHash, 6000, 'green')
                resetForm("donation-form")
                buttonStatus( "btndonate", "disabled", false) 
            })
            .catch( (error) => {
                if (firebase.auth().currentUser !== null) {
                    var useremail = firebase.auth().currentUser.email
                    error['donator'] = useremail
                }
                error['target'] = address
                error['amount'] = amount
                error['date'] = dateGenerator()
                error['hour'] = hourGenerator()
                error['projectname'] = name
                let id = idGenerator()
                querySet ("tx_failed", error, id)
                Materialize.toast("Transacción no aprobada : " + error.message, 4000, 'red')
                resetForm("donation-form")
                buttonStatus( "btndonate", "disabled", false)
            })      
    } catch (error) {
        if (firebase.auth().currentUser !== null) {
            var useremail = firebase.auth().currentUser.email
            error['donator'] = useremail
        }
        
        error['target'] = address
        error['amount'] = amount
        error['date'] = dateGenerator()
        error['hour'] = hourGenerator()
        error['projectname'] = name
        let id = idGenerator()
        querySet ("tx_failed", error, id)
        Materialize.toast("Transacción no aprobada : "+error.message, 3000, 'red')
        resetForm("donation-form")
        buttonStatus( "btndonate", "disabled", false)
    }  
}

