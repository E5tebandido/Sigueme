

$(document).on('click', '.btnpro', (event) => {
    projectsAccountVerification(event.target.id)
});

var getOneProject = (address,name,balance,location,description,maxfounds,missingfounds) => {
    const data = `
    <div class="col s12 m12">
    <p class="information">
        <label for="">Cuenta ethereum del proyecto</label>
        <input type="text" id="p_address" value="${address}" style="border-bottom: whitesmoke;" readonly>
    </p>
    </div>
    <div class="row">
        <div class="col s12 m12">
        <h6 class="blue-grey-text text-accent-2" >Nombre del proyecto</h6>
        <p>${name}</p>
        <h6 class="blue-grey-text text-accent-2" >Descripción</h6>
        <p>${description}</p>
        <h6 class="blue-grey-text text-accent-2" >Ubicación de ejecución del proyecto</h6>
        <p>${location}</p>
        </div>
        <div class="col s12 m12">
            <h6 class="blue-grey-text text-accent-2" >Fondos propuestos</h6>
            <p> ${maxfounds} wei</p>
            <progress max="${maxfounds}" value="${maxfounds}"></progress>
            <h6 class="blue-grey-text text-accent-2" >Fondos recaudados</h6>
            <p> ${balance} wei</p>
            <progress max="${maxfounds}" value="${balance}"></progress>
            <h6 class="blue-grey-text text-accent-2" >Fondos faltantes</h6>
            <p> ${missingfounds} wei</p>
            <progress max="${missingfounds}" value="0"></progress>
        </div>  
    </div>
    `;

    $("#transactionpanel").append(data)
    $("#btndonate").attr("disabled",false)
    sessionVerificationForActions()
}