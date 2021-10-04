var getOneProject = (address,name,balance,location,description,maxfounds,missingfounds) => {
    let data = `
    <div class="col s12 m12">
        <p class="information">
            <label for="p_address">Cuenta ethereum del proyecto</label>
            <input type="text" id="p_address" value="${address}" style="border-bottom: whitesmoke; text-align:center;" readonly>
        </p>
    </div>  
    <div class="col s12 m12">
        <h5 class="blue-grey-text accent-3"><b>${name}</b></h5>
        <p>${description}</p>
        <p class="blue-grey-text accent-3">${location}</p>
        <progress max="${maxfounds}" value="${balance}"></progress>
    </div> 
    <form id="donation-form" onsubmit="metamaskInitializationForContract();return false">
            <div class='input-field'>
                <label>Cantidad de wei a donar</label>
                <input type="number" id="amount" class="validate" style="text-align: center;" required>
            </div>
            <div class='row'>
              <button id="btndonate" type="submit" class="btnpro btn halfway-fab purple lighten-4 waves-effect white-text" style="border-radius:20px;" value="Donar" disabled>
              <i class="fab fa-ethereum"></i>
              </button>    
            </div>
        </form>
    
    `;
    loadData("transactionpanel",data)
    buttonStatus( "btndonate", "disabled", false)
    sessionVerificationForActions()
}


