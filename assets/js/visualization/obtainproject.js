

$(document).on('click', '.btnpro', function (event) {
    specificProject('project',event.target.id)
});

var renderOneProject = function (entityid,name,address,status){
    contentLoader("contentpage","templates/transaction.html")
    console.log(address,name,status)
    $(document).ready(function(){
       
        const projectRender = `
    
        <div class="card-content blue-grey-text">
            <form class="col">    
                <div class="input-field">
                    <i class="material-icons prefix"></i>
                    <input type="text" id="amount" class="autocomplete">
                    <label for="amount">Valor</label>
                </div>
                <div class="input-field col s6">
                    <i class="material-icons prefix"></i>
                    <input type="text" id="project_address" class="autocomplete" hidden="true" value="${address}">
                    <label for="project_address">project address</label>
                </div>
            </form>
            <button class="btn waves-effect" onclick="setNewTransaction()">
                Confirmar 
            </button>
            <button class="btn red lighten-1 waves-effect" onclick="sethomeview()">
                Cancelar
            </button>
        </div>
        <div class="col s12 m6">
            <div class="card" style="border-radius:20px;">
            <div class="card-image">
                <img src="../assets/images/donationimage.PNG" id="donationimage" alt="donation"></img>
            </div>
                <div class="card-content white-text">
                <h4 class="card-title blue-grey-text">${name}</h4>
                <p  class="card-title grey-text">${entityid}</p>
                <p class="card-title grey-text">${address}</p>
                <p class="card-title grey-text">${status}</p>
                </div>
            </div>
        </div>
    `;

    $("#newtransactioncard").append(projectRender)
    })
    
    
}