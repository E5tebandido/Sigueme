const Tx = async (amount,address,curaccount,instance) => {
    try {  
        await instance.methods.make_transaction(amount,address,true,true)
        .send({ 
                from: curaccount
            })
            .then( function(tx) {   
                /*const data = {
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
                }*/
                querySender("tx",tx)
                Materialize.toast("Transacción exitosa con hash : "+tx.blockHash, 3000, 'green')
            })
            .catch(function(error){
                querySender("tx_failed",error)
                Materialize.toast("Transacción no aprobada : "+error, 3000, 'red')
                
            })      
    } catch (error) {
        querySender("tx_failed",error.message)
        Materialize.toast("Transacción no aprobada : "+error.message, 3000, 'red')
    }  
}

