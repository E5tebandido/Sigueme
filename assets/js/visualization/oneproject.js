var getOneProject = (address,name,balance,location,description,maxfounds,missingfounds) => {
    let data = `
    <div class="col s12 m12">
        <p class="information">
            <label for="p_address">Cuenta ethereum del proyecto</label>
            <input type="text" class="grey-text text-accent-2" id="p_address" value="${address}" style="border-bottom: whitesmoke; text-align:center;" readonly>
        </p>
    </div>  
    <div class="col s12 m12">
        <h5 class="blue-grey-text accent-3"><b>${name}</b></h5>
        <p>${description}</p>
        <p class="grey-text text-accent-2">${location}</p>
        <progress max="${maxfounds}" value="${balance}"></progress>
    </div> 
    <form id="donation-form" onsubmit="metamaskInitializationForContract();return false">
        <div class='input-field'>
            <label>Cantidad de wei a donar</label>
            <input type="number" id="amount" class="validate" style="text-align: center; border-color: #E7EBDA;" required>
        </div>
        <div class='row'>
            <input id="btndonate" type="submit" class="right button-solid white blue-grey-text text-accent-2" style="border:30px;" value="Comenzar transacción" disabled>
            </input>    
        </div>
    </form>
    `;
    loadData("transactionpanel",data)
    buttonStatus( "btndonate", "disabled", false)
    sessionVerificationForActions()
}


