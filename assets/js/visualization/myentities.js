var renderMyEntities = (name,status,id_for_delete,email,url,facebook,instagram) => {
    const data = `
    <div class="col s12 m12">
        <div class="container">
            <div class="white" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1.5px solid #BDD9F2; border-radius: 20px; width: 100%;"
                <h5 class="blue-grey-text accent-2" style="text-align:justify;">${name}</h5>
                <p class="blue-grey-text accent-2" style="text-align:justify;"><b>Email</b></P>
                <p> ${email} </p>
                <p class="blue-grey-text accent-2" style="text-align:justify;"><b>Url</b></P>
                <p> ${url} </p>
                <p class="blue-grey-text accent-2" style="text-align:justify;"><b>Facebook</b></P>
                <p> ${facebook} </p>
                <p class="blue-grey-text accent-2" style="text-align:justify;"><b>Instagram</b></P>
                <p> ${instagram} </p>
                <p class="blue-grey-text accent-2" style="text-align:justify;"><b>Estado de la entidad</b></P>
                <p> ${status} </p>
                <br>
                <a id="${id_for_delete}" href="javascript:;" class="btnpro btn halfway-fab purple lighten-3 waves-effect" style="border-radius:20px;"><i class="fas fa-trash"></i></a> 
            </div>
        </div>
        <br>
    </div>
    `;
    $("#myentitiespanel").append(data)
}
