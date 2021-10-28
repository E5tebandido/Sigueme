var renderAproveds = (donator,amount,target,date) => {
    let adata = `
    <tr>
        <td>
            <div class="col s12 m12">
                <div class="container">
                    <div class="white" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1.5px solid #BDD9F2; border-radius: 20px; width: 100%;">
                        <h6 class="blue-grey-text accent-3" style="text-align:center;"><b> ${donator}</b></h6>
                        <p> ${amount}<p>
                        <p> ${target}<p>
                        <p> ${date}<p>   
                    </div>
                </div>
                <br>
            </div>
        </td>
    </tr>
    `;
    loadData("historialaprovepanel", adata)
}

var renderFaileds = (donator,amount,target,date) => {
    let fdata = `
    <div class="col s12 m12">
        <div class="container">
            <div class="white" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1.5px solid #BDD9F2; border-radius: 20px; width: 100%;">
                <h6 class="blue-grey-text accent-3" style="text-align:center;"><b> ${donator}</b></h6>
                <p> ${amount}<p>
                <p> ${target}<p>
                <p> ${date}<p>   
            </div>
        </div>
        <br>
    </div>
    `;
    loadData("historialfailedpanel", fdata)
}