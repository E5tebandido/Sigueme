var renderProjects = (name,pid,balance,description,maxfounds,icon) => {
    let data = `
        <div class="col s12 m3">
            <div class="card">
                <div class="card-image">
                    <img src="${icon}">
                    <span class="card-title black-text"><b>${name}</b></span>
                </div>
                <div class="card-content">
                    <p>${description}</p>
                </div>
                <div class="card-action">
                    <a href="javascript:;" id="${pid}" onclick="getclickedproject(this)">Ver más y donar</a>
                </div>
            </div>
        </div>
    `;   
    loadData("projectpanel",data)
}

var renderMyProjects = (name,pid,balance,description,maxfounds,icon) => {
    let data = `
    <div class="col s12 m3">
        <div class="card">
            <div class="card-image">
                <img src="${icon}">
                <span class="card-title black-text"><b>${name}</b></span>
            </div>
            <div class="card-content">
                <p>${description}</p>
            </div>
            <div class="card-action">
                <a href="javascript:;" id="${pid}" onclick="editMyProjects(this)" >Editar </a>
            </div>
        </div>
    </div>
    `;
    loadData("myprojectpanel",data)
}