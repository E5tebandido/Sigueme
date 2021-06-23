
var checkForProjects = function() {
    projectRecieverRule('project')
}

var renderProjects = (name,address,balance,description,maxfounds) => {
    const data = `
    <div class="col s12 m6">
        <div class="card" style="border-radius:20px;">       
            <div class="card-content gray-text">
                <h5 class="blue-grey-text accent-2">${name}</h5>
                <p><b>Descripción</b></P>
                <p> ${description}<p>
                <p><b>Fondos recaudados</b></P>
                <progress max="${maxfounds}" value="${balance}"></progress>
                <p> ${balance}<p>
            </div>
            <div class="card-action">
                <a id="${address}" href="javascript:;" class="btnpro"><i class="material-icons">volunteer_activism</i>Ver más y Donar</a> 
            </div> 
        </div>
    </div>
    `;
    $("#projectpanel").append(data)
}
