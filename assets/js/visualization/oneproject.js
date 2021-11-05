var getOneProject = (address,name,balance,location,description,maxfounds,icon) => {
    let data = `
    <div class="col s12 m12">
        <p class="information">
            <label for="p_address">Cuenta ethereum del proyecto</label>
            <input type="text" class="grey-text text-accent-2" id="p_address" value="${address}" style="border-bottom: whitesmoke; text-align:center;" readonly>
        </p>
    </div>  
    <div class="col s12 m12">
        <a href="javascript:;" class="purple-text text-lighten-4 waves-effect"><i class="${icon} fa-3x"></i></a>
        <h5 id="p_name" class="grey-text text-accent-1"><b>${name}</b></h5>
        <p>${description}</p>
        <p class="grey-text text-accent-2">${location}</p>
    </div> 
    <form id="donation-form" onsubmit="metamaskInitializationForContract();return false">
        <div class='input-field'>
            <label>Cantidad de wei a donar</label>
            <input type="number" id="amount" class="validate" style="text-align: center; border-color: #E7EBDA;" required>
        </div>
        <div class='row'>
            <input id="btndonate" type="submit" class="right button-solid white blue-grey-text text-accent-2" style="border:30px;" value="" disabled>
            <label for="btndonate" class="blue-text text-lighten-3 waves-effect"><i class="fab fa-ethereum fa-3x"></i></label>
            </input>    
        </div>
    </form>
    `;
    loadData("transactionpanel",data)
    buttonStatus( "btndonate", "disabled", false)
    sessionVerificationForActions()
}


