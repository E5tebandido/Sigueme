var renderMyProjects = (name,id_for_delete,status,balance,description,maxfounds,parent) => {
    const data = `
    <div class="col s12 m12">
        <div class="container">
            <div class="white" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1.5px solid #BDD9F2; border-radius: 20px; width: 100%;"
                <h5 class="blue-grey-text accent-2" style="text-align:justify;">${name}</h5>
                <p class="blue-grey-text accent-2"><b>Entidad a la que pertenece</b></P>
                <p style="text-align:justify;"> ${parent}<p>
                <p class="blue-grey-text accent-2"><b>Descripción del proyecto</b></P>
                <p style="text-align:justify;"> ${description}<p>
                <p class="blue-grey-text accent-2" style="text-align:justify;"><b>Fondos recaudados</b></P>
                <progress max="${maxfounds}" value="${balance}"></progress>
                <p> ${balance} </p>
                <p class="blue-grey-text accent-2" style="text-align:justify;"><b>Estado del proyecto</b></P>
                <p> ${status} </p>
                <br>
                <a id="${id_for_delete}" href="javascript:;" class="btnpro btn halfway-fab purple lighten-3 waves-effect" style="border-radius:20px;"><i class="fas fa-trash"></i></a>
            </div>
        </div>
        <br>
    </div>
    `;
    $("#myprojectspanel").append(data)
}
