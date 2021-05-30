var checkForAproveds = function() {
    historialAproveRule('transaction')
}

var checkForFaileds = function() {
    historialFailedRule('failed_transaction')
}

var renderAproveds = (blockhash,contract_address,origin_account,project_address,transaction_amount,transaction_hash) => {
    const data = `
    <tr>
        <td>${blockhash}</td>
        <td>${contract_address}</td>
        <td>${origin_account}</td>
        <td>${project_address}</td>
        <td>${transaction_amount}</td>
        <td>${transaction_hash}</td>
    </tr>
    `;
    stopping("loadspin")
    $("#tbodyaproved").append(data)
}

var renderFaileds = (argument,reason,value) => {
    const data = `
    <tr>
        <td>${argument}</td>
        <td>${reason}</td>
        <td>${value}</td>
    </tr>
    `;
    stopping("loadspin")
    $("#tbodyfailed").append(data)
}