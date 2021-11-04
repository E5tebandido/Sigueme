var renderAproveds = (donator,amount,projectname,date,hour) => {
    let adata = `
    <tr>
        <td>
            <div class="col s12 m12">
                <center>
                <div class="container">
                    <div class="allapptx" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1.5px solid #BDD9F2; border-radius: 20px; width: 100%;">
                        <br>
                        <h5 class="blue-grey-text accent-3"><b>${projectname}</b></h5>
                        <br>
                        <h5 class="grey-text text-lighten-1" >${amount}<i class="fab fa-ethereum"></i></h5>
                        <input  type="text" class="grey-text text-accent-2" value="${donator}" style="border-bottom: whitesmoke; text-align:center;" readonly>
                        <p>${date}<i class="far fa-calendar-alt"></i></p>
                        <p>${hour}<i class="far fa-clock"></i></p>
                        <br><br>
                    </div>
                </div>
                <br>
                </center>
            </div>
        </td>
    </tr>
    `;
    loadData("historialaprovepanel", adata)
}

var renderFaileds = (donator,amount,projectname,date,hour) => {
    let fdata = `
    <tr>
        <td>
            <div class="col s12 m12">
                <center>
                <div class="container">
                    <div class="allapptx" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1.5px solid #BDD9F2; border-radius: 20px; width: 100%;">
                        <br>
                        <h5 class="blue-grey-text accent-3"><b>${projectname}</b></h5>
                        <br>
                        <h5 class="grey-text text-lighten-1" >${amount}<i class="fab fa-ethereum"></i></h5>
                        <input  type="text" class="grey-text text-accent-2" value="${donator}" style="border-bottom: whitesmoke; text-align:center;" readonly>
                        <p>${date}<i class="far fa-calendar-alt"></i></p>
                        <p>${hour}<i class="far fa-clock"></i></p>
                        <br><br>
                    </div>
                </div>
                <br>
                </center>
            </div>
        </td>
    </tr>
    `;
    loadData("historialfailedpanel", fdata)
}