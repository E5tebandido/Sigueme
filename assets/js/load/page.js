$(document).ready( () =>
{
    callFirebase()
    $("#navsco").load("templates/navbar.html", () => {
        loadSideNav()
        loadDropdown()
        sessionVerificationForNavBar()
    })
    sethomeview()
    loadModal()
})

var sethomeview = () => {   
    clearContainer("contentpage")
    $("#contentpage").load("templates/home.html", () => {
        loadCarousel()
        loadCollapsible()
        
    })
}

var setsigninview = () => {   
    clearContainer("contentpage")
    $("#contentpage").load("templates/signin.html", () => {
        
    })
}

var setsignupview = () => {   
    clearContainer("contentpage")
    $("#contentpage").load("templates/signup.html", () => {
        
    })
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
        sessionVerificationForActions()
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
        clearContainer("projectpanel")
        sessionVerificationForVisualization()
        seeAllProjects(() => {
            makePagination("allprojectstable","allprojectspager")
        })
    })
}

var sethistorialaprove = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/historialaprove.html", () => {
        sessionVerificationForVisualization()
        seeAllAproveds(() => {
            makePagination("allapprovedstable","allapprovedspager")
        })
    })
}

var sethistorialfailed = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/historialfailed.html", () => {
        sessionVerificationForVisualization()
        seeAllFaileds()
    })
}

var setSeeMyProjects = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/seeproject.html", () => {
        sessionVerificationForVisualization()
        seeMyProjects(() => {
            makePagination("allprojectstable","allprojectspager")
        })
    })
}

var setSeeMyFaileds = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/historialfailed.html", () => {
        sessionVerificationForVisualization()
        seeMyFaileds()
    })
}

var setSeeMyAproveds = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/historialaprove.html", () => {
        sessionVerificationForVisualization()
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

var setseeentitiyview = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/seeentities.html", () => {
        sessionVerificationForCreateProject()
    })
}