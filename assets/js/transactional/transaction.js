const Tx = async (amount,address,tab,curaccount,instance) => {
    console.log(instance)
    try {  
        await instance.methods.make_transaction(amount,address,true,true)
        .send({ 
                from: curaccount
            })
            .then( function(tx) {
                
                const data = {
                    'project_address' : address,
                    'blockhash' : tx.blockHash,
                    'transaction_amount' : amount,
                    'contract_address' : tx.contractAddress,
                    'cumulative_gas_used' : tx.cumulativeGasUsed,
                    'blocknumber' : tx.blockNumber,
                    'origin_account' : tx.from,
                    'gas_used' : tx.gasUsed,
                    'logs_bloom' : tx.logsBloom,
                    'root' : tx.root,
                    'status' : tx.status,
                    'contract_address' : tx.to,
                    'transaction_hash' : tx.transactionHash,
                    'transaction_index' : tx.transactionIndex
                }
                querySender(tab.one,data)
                Materialize.toast("Transacción exitosa con hash :" +tx.blockHash, 3000)
                $("#btndonate").prop('disabled', true);
            })
            .catch(function(error){
                querySender(tab.two,error)
                Materialize.toast("Transacción no aprobada", 3000)
                
            })      
    } catch (error) {
        querySender(tab.two,error)
        Materialize.toast("Transacción no aprobada", 3000)
        $("#btndonate").prop('disabled', true);
    }  
}

