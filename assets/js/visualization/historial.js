var renderAproveds = (donator,amount,projectname,date,hour) => {
    let adata = `
    <div class="col s12 m3">
        <div class="card">
            <div class="card-image">
            <img src="../assets/images/paraiso.png">
            <span class="card-title black-text"><b>${projectname}</b></span>
            </div>
            <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">Ver detalles<i class="material-icons right">more_vert</i></span>
            </div>
            <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Detalles de la transacción<i class="material-icons right">close</i></span>
            <p class="blue-text">Donante</p>
            <p>${donator}</p>
            <p class="blue-text">Monto de la transacción</p>
            <p>${amount}</p>
            <p class="blue-text">Fecha de la transacción</p>
            <p>${date}</p>
            <p class="blue-text">Hora de la transacción</p>
            <p>${hour}</p>
            <p class="blue-text">Proyecto que recibió</p>
            <p>${projectname}</p>
            </div>
        </div>
    </div> 
    `;
    loadData("historialaprovepanel", adata)
}
