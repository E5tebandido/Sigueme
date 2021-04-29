const Tx = async (amount,address,tab,curaccount,bytecode) => {
    metamaskIsAviable()
    getCurrentAccount();
    try {   
        /*console.log("hola")
        const transactionParameters = {
            from: data.currentaccount, 
            data: data.bytecode, 
            gas: 200000
        };
            
        const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
        });

        console.log(txHash)*/
            /*await window.contract.methods.make_transaction(amount,address,true,true).send({ 
                from: data.currentaccount 
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
                console.log('este es el add' + data.currentaccount)
            })
            .catch(function(error){
                querySender(table.two,error)
            });*/
        
    } catch (error) {
        querySender(tab.two,error);
    }  
}


var activateTx = () => {
    $.getJSON("assets/json/web3account.json", function(data) {
        var amount = $("#amount").val();
        var address = $("#project_address").val();
        var curaccount = data.currentaccount
        var bytecode = data.bytecode
        const table = {
            'one' : 'transaction',
            'two' : 'failed_transaction'
        }
        
        Tx(amount,address,table,curaccount,bytecode)
    });
}