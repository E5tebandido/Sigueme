var renderProjects = (name,pid,balance,description,maxfounds) => {
    let data = `
    <div class="col s12 m12">
        <center>
        <div class="container">
            <div class="allprojects" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1.5px solid #BDD9F2; border-radius: 20px; width: 100%;">
                <h5 class="blue-grey-text accent-3"><b>${name}</b></h5>
                <br>
                <p"> ${description}<p>
                <progress max="${maxfounds}" value="${balance}"></progress>
                <br><br>
                <a id="${pid}" href="javascript:;" onclick="getclickedproject(this)" class="btn halfway-fab purple lighten-4 waves-effect" style="border-radius:20px;">&nbsp;<i class="far fa-heart"></i></a> 
            </div>
        </div>
        <br>
        </center>
    </div>
    `;
    
    loadData("projectpanel",data)
}

var renderMyProjects = (name,pid,balance,description,maxfounds) => {
    let data = `
    <div class="col s12 m12">
        <center>
        <div class="container">
            <div class="allprojects" style="display: inline-block; padding: 32px 48px 0px 48px; border: 1.5px solid #BDD9F2; border-radius: 20px; width: 100%;">
                <h5 class="blue-grey-text accent-3"><b>${name}</b></h5>
                <br>
                <p"> ${description}<p>
                <progress max="${maxfounds}" value="${balance}"></progress>
                <br><br>
                <a id="${pid}" href="javascript:;" onclick="editMyProjects(this)" class="btn halfway-fab blue lighten-3 waves-effect" style="border-radius:20px;">&nbsp;<i class="far fa-edit"></i></a> 
                <a id="${pid}" href="javascript:;" onclick="deleteMyProjects(this)" class="btn halfway-fab red lighten-3 waves-effect" style="border-radius:20px;">&nbsp;<i class="far fa-trash"></i></a> 
            </div>
        </div>
        <br>
        </center>
    </div>
    `;
    loadData("projectpanel",data)
}