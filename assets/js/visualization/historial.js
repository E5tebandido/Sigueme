var renderAproveds = (blockhash,from,transactionhash) => {
    const data = `
    <div class="col s12 m12">
        <div class="container">
            <div class="white" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1.5px solid #BDD9F2; border-radius: 20px; width: 100%;">
                <h6 class="blue-grey-text accent-3" style="text-align:center;"><b>TX : ${transactionhash}</b></h6>
                <p class="blue-grey-text accent-2">Hash del bloque que minó la transacción</p>
                <p> ${blockhash}<p>
                <p class="blue-grey-text accent-2">cuenta pública del donante</p>
                <p> ${from}<p>     
            </div>
        </div>
        <br>
    </div>
    `;
    $("#historialaprovepanel").append(data)
}

var renderFaileds = (argument,code,receipt) => {
    const data = `
    <div class="col s12 m12">
        <div class="container">
            <div class="white" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1.5px solid #BDD9F2; border-radius: 20px; width: 100%;"
                <h6 class="blue-grey-text accent-2">Transacción</h6>
                <p><b>Razón de la falla</b></P>
                <p> ${code}<p>
                <p><b>Tipo</b></P>
                <p> ${argument}<p>
                <p><b>Cuenta que realizó la donación</b></P>
                <p> ${receipt}<p>
            </div>
        </div>
        <br>
    </div>
    `;
    $("#historialfailedpanel").append(data)
}