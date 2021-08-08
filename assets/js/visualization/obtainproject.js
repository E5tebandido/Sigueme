

$(document).on('click', '.btnpro', function (event) {
    specificProjectRule('project',event.target.id)
});

var setAddress = (address,name,balance,location,description,maxfounds,missingfounds) => {
    const data = `
    <div class="col s12 m12">
    <br>
    <p class="information">
        <label for="">Cuenta ethereum de la entidad</label>
        <input type="text" id="p_address" class="autocomplete" value="${address}" readonly>
    </p>
    </div>
    <br><br>
    <div class="row">
        <div class="col s12 m6">
        <h6 class="blue-grey-text accent-2" >Nombre del proyecto</h6>
        <p>${name}</p>
        <h6 class="blue-grey-text accent-2" >Descripción</h6>
        <p>${description}</p>
        <h6 class="blue-grey-text accent-2" >Ubicación de ejecución del proyecto</h6>
        <p>${location}</p>
        </div>
        <div class="col s12 m6">
            <h6 class="blue-grey-text accent-2" >Fondos propuestos</h6>
            <p> ${maxfounds} wei</p>
            <progress max="${maxfounds}" value="${maxfounds}"></progress>
            <h6 class="blue-grey-text accent-2" >Fondos recaudados</h6>
            <p> ${balance} wei</p>
            <progress max="${maxfounds}" value="${balance}"></progress>
            <h6 class="blue-grey-text accent-2" >Fondos faltantes</h6>
            <p> ${missingfounds} wei</p>
            <progress max="${missingfounds}" value="0"></progress>
        </div>  
    </div>
    `;

    $("#transactionpanel").append(data)
    $("#btndonate").prop("disabled",false)
}