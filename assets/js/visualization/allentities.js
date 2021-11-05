var renderMyEntities = (name,id,status) => {
    let data = `
    <tr>
        <td>
            <div class="col s12 m12">
                <center>
                <div class="container">
                    <div id="${id}" onclick="getclickedentity(this)" class="allprojects" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1.5px solid #BDD9F2; border-radius: 20px; width: 100%;">
                        <a class="purple-text text-lighten-3 waves-effect"><i class="far fa-plus fa-2x"></i></a>
                        <h5 class="grey-text text-accent-1"><b>${name}</b></h5>
                        <p class="blue-grey-text accent-2">${status}</P>
                        <br> 
                    </div>
                </div>
                <br>
                </center>
            </div>
        </td>
    </tr>
    `;
    loadData("entitypanel",data)
}