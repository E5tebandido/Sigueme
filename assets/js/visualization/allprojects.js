
var checkForProjects = function() {
    projectRecieverRule('project')
}

var renderProjects = (name,address,balance,description,maxfounds) => {
    const data = `
    <div class="col s12 m12">
        <div class="card" style="border-radius:20px;"> 
            <div class="card-content gray-text">
                <h5 class="blue-grey-text accent-2" style="text-align:justify;">${name}</h5>
                <p class="blue-grey-text accent-2"><b>Descripción del proyecto</b></P>
                <p style="text-align:justify;"> ${description}<p>
                <p class="blue-grey-text accent-2" style="text-align:justify;"><b>Fondos recaudados</b></P>
                <progress max="${maxfounds}" value="${balance}"></progress>
                <p> ${balance}<p>
                <br>
                <a id="${address}" href="javascript:;" class="btnpro btn halfway-fab purple lighten-3 waves-effect" style="border-radius:20px;">ver y donar &nbsp;<i class="far fa-heart"></i></a> 
            </div>
            
        </div>
    </div>
    `;
    $("#projectpanel").append(data)
}