var renderMyEntities = (name,id,status) => {
    let data = `
    <div class="col s12 m12">
        <center>
        <div class="container">
            <div class="allprojects" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1.5px solid #BDD9F2; border-radius: 20px; width: 100%;">
                <h5 class="blue-grey-text accent-3"><b>${name}</b></h5>
                <p class="blue-grey-text accent-2">Id del proyecto</P>
                <p"> ${id}<p>
                <p class="blue-grey-text accent-2">Estado de la entidad</P>
                <p> ${status}<p>
                <br>
                <a id="${id}" href="javascript:;" onclick="getclickedentity(this)" class="btn halfway-fab purple lighten-4 waves-effect" style="border-radius:20px;">&nbsp;<i class="far fa-plus"></i></a> 
            </div>
        </div>
        <br>
        </center>
    </div>
    `;
    loadData("entitypanel",data)
}