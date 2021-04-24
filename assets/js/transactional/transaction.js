async function setNewTransaction() {
    metamaskInit()
    newContract()
    const account = await getCurrentAccount();
    console.log(account)
    var amount = $("#amount").val();
    var address = $("#project_address").val();
    const table = {
        'one' : 'transaction',
        'two' : 'failed_transaction'
    }
    try {
        await window.contract.methods.make_transaction(amount,address,true,true).send({ 
            from: account 
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
            querySender(table.one,data)
        })
        .catch(function(error){
            querySender(table.two,error)
        });
    } catch (error) {
        querySender(table.two,error);
    }  
}


