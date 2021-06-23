var checkForAproveds = function() {
    historialAproveRule('transaction')
}

var checkForFaileds = function() {
    historialFailedRule('failed_transaction')
}

var renderAproveds = (blockhash,contract_address,origin_account,project_address,transaction_amount,transaction_hash) => {
    const data = `
    <div class="col s12 m12">
        <div class="card" style="border-radius:20px;">       
            <div class="card-content gray-text">
                <h6 class="blue-grey-text accent-2">Transacción -> ${transaction_hash}</h6>
                <p><b>Hash del bloque</b></P>
                <p> ${blockhash}<p>
                <p><b>cuenta ethereum del contrato que aprobó la transacción</b></P>
                <p> ${contract_address}<p>
                <p><b>Cuenta que realizó la donación</b></P>
                <p> ${origin_account}<p>
                <p><b>Cuenta del proyecto</b></P>
                <p> ${project_address}<p>
                <p><b>Valor de la donación</b></P>
                <p> ${transaction_amount} wei<p>
            </div>
        </div>
    </div>
    `;
    $("#historialaprovepanel").append(data)
}

var renderFaileds = (argument,code,receipt) => {
    const data = `
    <div class="col s12 m12">
        <div class="card" style="border-radius:20px;">       
            <div class="card-content gray-text">
                <h6 class="blue-grey-text accent-2">Transacción -> </h6>
                <p><b>Razón de la falla</b></P>
                <p> ${code}<p>
                <p><b>Tipo</b></P>
                <p> ${argument}<p>
                <p><b>Cuenta que realizó la donación</b></P>
                <p> ${receipt}<p>
            </div>
        </div>
    </div>
    `;
    $("#historialfailedpanel").append(data)
}