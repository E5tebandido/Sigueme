var renderMyEntities = (name,id,nit,url,email,cel,balance) => {
    let data = ` 
    <div class="col s12 m4">
        <div class="card horizontal">
            <div class="card-stacked">
            <div class="card-content">
                <h5 class="grey-text text-accent-1"><b>${name}</b></h5>
                <p><b>Nit</b> ${nit}</p>
                <a href="${url}" target="blank_"><b>Ir a la página</b></a>
                <p><b>email</b> ${email}</p>
                <p><b>Teléfono</b> ${cel}</p>
                <p><b>Recaudado</b> ${balance}</p>
            </div>
            <div class="card-action">
                <a href="javascript:;"  id="${id}" onclick="getclickedentity(this)">Crear un proyecto</a>
            </div>
            </div>
        </div>
    </div>
    `;
    loadData("entitypanel",data)
}