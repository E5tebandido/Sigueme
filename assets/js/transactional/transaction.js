var Tx = async (amount,address,curaccount,instance) => {
    try {  
        await instance.methods.make_transaction(amount, address, true, true)
        .send({ 
                from: curaccount
            })
            .then( function(tx) {   
                tx['origin'] = curaccount
                tx['target'] = address
                tx['amount'] = amount
                querySet ("tx", tx, address)
                Materialize.toast("Transacción aprobada número : " + tx.blockHash, 4000, 'green')
                resetForm("donation-form")
                buttonStatus( "btndonate", "value", "Donar")
                buttonStatus( "btndonate", "disabled", false) 
            })
            .catch( (error) => {
                querySet ("tx_failed", error, address)
                Materialize.toast("Transacción no aprobada : " + error.message, 4000, 'red')
                resetForm("donation-form")
                buttonStatus( "btndonate", "value", "Donar")
                buttonStatus( "btndonate", "disabled", false)
            })      
    } catch (error) {
        querySet ("tx_failed", error, address)
        Materialize.toast("Transacción no aprobada : "+error.message, 3000, 'red')
        resetForm("donation-form")
        buttonStatus( "btndonate", "value", "Donar")
        buttonStatus( "btndonate", "disabled", false)
    }  
}

