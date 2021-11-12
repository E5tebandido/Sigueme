$(document).ready( () =>
{
    callFirebase()
    $("#navsco").load("templates/navbar.html", () => {
        loadSideNav()
        sessionVerificationForNavBar(()=>{
            loadSideNav2()
        })
    })
    setseeprojectview()

})

var setsigninview = () => {   
    clearContainer("contentpage")
    $("#contentpage").load("templates/signin.html")
}

var setseeentitiyview = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/seeentities.html", () => {
        sessionVerificationForActions()
        seeMyEntities(()=>{
            makePagination("allentitiestable","allentitiespager")
        })
    })
}

var setseenvview = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/notverified.html")
}

var setsignupview = () => {   
    clearContainer("contentpage")
    $("#contentpage").load("templates/signup.html")
}

var setnewentityview = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/newentity.html", () => {
        sessionVerificationForActions()
    })
}

var getclickedproject = (proj) => {
    let id = proj.id
    clearContainer("contentpage")
    $("#contentpage").load("templates/transaction.html", () => {
        seeOneProject(id)
    })
}

var getclickedentity = (ent) => {
    let id = ent.id
    clearContainer("contentpage")
    $("#contentpage").load("templates/newproject.html", () => {
        formin("parentid",id)
        buttonStatus("parentid","disabled",true)
    })
}

var setseeprojectview = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/seeproject.html", () => {
        seeAllProjects(() => {
            makePagination("allprojectstable","allprojectspager")
        })
    })
}

var sethistorialaprove = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/historialaprove.html", () => {
        seeAllAproveds(() => {
            makePagination("allapprovedstable","allapprovedspager")
        })
    })
}

var setSeeMyProjects = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/seemyprojects.html", () => {
        seeMyProjects(() => {
            makePagination("allmyprojectstable","allmyprojectspager")
        })
    })
}


var setSeeMyAproveds = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/historialaprove.html", () => {
        seeMyAproveds(() => {
            makePagination("allapprovedstable","allapprovedspager")
        })
    })
}

var deleteMyProjects = (delproj) => {
    let id = delproj.id
    deleteMyProject(id)
}

var editMyProjects = (edproj) => {
    let id = edproj.id
    editMyProject(id)
}

