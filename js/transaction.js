async function siguemeTransfer() {
    metamaskInit()
    const account = await getCurrentAccount();
    var amount = $("#amount").val();
    var id = $("#entity_id").val();
    var address = $("#project_address").val();
    try {
        await window.contract.methods.transfer(amount,id,address).send({ 
            from: account 
        }).then( function(tx) {
            console.log("Transaction ok: ", tx);
        });
    } catch (error) {
        console.log("Transaction failed : error " + error );
    }  
}


