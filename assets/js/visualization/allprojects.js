var renderProjects = (name,address,balance,description,maxfounds) => {
    let data = `
    <div class="col s12 m12">
        <center>
        <div class="container">
            <div class="white" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1.5px solid #BDD9F2; border-radius: 20px; width: 100%;">
                <p class="blue-grey-text accent-3"><b>${name}</b></p>
                <p class="blue-grey-text accent-2">Descripción del proyecto</P>
                <p"> ${description}<p>
                <p class="blue-grey-text accent-2">Fondos recaudados</P>
                <progress max="${maxfounds}" value="${balance}"></progress>
                <p> ${balance}<p>
                <br>
                <a id="${address}" href="javascript:;" class="btnpro btn halfway-fab purple lighten-3 waves-effect" style="border-radius:20px;">ver y donar &nbsp;<i class="far fa-heart"></i></a> 
            </div>
        </div>
        <br>
        </center>
    </div>
    `;
    loadData("projectpanel",data)
}
