var getOneProject = (address,name,balance,location,description) => {
    let data = ` 
    <center>
    <div class="card-panel white z-depth-0">
        <br><br>
        <h5 class="grey-text text-accent-1"><b>Cuenta Ethereum del proyecto</b></h5>
        <p class="information">
            <input type="text" class="grey-text text-accent-2" id="p_address" value="${address}" style="border-bottom: whitesmoke; text-align:center;" readonly>
        </p>
        <h6 class="blue-text"><b>Nombre del proyecto</b></h6>
        <h6 id="p_name" class="grey-text text-accent-1"><b>${name}</b></h6>
        <br>
        <h6 class="blue-text"><b>Descripción</b></h6>
        <p>${description}</p>
        <br>
        <h6 class="blue-text"><b>Fondos recaudados</b></h6>
        <p>${balance}</p>
        <br>
        <form id="donation-form" onsubmit="metamaskInitializationForContract();return false">
            <div class='input-field'>
                <label>Cantidad de wei a donar</label>
                <input type="number" step="any" id="amount" class="validate" style="text-align: center; border-color: #E7EBDA;" required>
            </div>
            <div class='row'>
                <input id="btndonate" type="submit" class="right button-solid white blue-grey-text text-accent-2" style="border:30px;" value="" disabled>
                    <label for="btndonate" class="blue-text text-lighten-3 waves-effect"><i class="fab fa-ethereum fa-3x"></i></label>
                </input>    
            </div>
        </form>
    </div>
    </center>
    `;
    loadData("transactionpanel",data)
    buttonStatus( "btndonate", "disabled", false)
    sessionVerificationForActions()
}


