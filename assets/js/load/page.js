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

var setnewprojectview = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/newproject.html", () => {
        sessionVerificationForActions()
    })
}

var settransactionview = (address,name,balance,location,description,maxfounds,missingfounds) => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/transaction.html", () => {
        Materialize.toast('cuenta del proyecto : '+address, 2000, 'blue')
        getOneProject(address,name,balance,location,description,maxfounds,missingfounds)
    })
}


var setseeprojectview = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/seeproject.html", () => {
        sessionVerificationForVisualization()
        projectStatusVerification()
    })
}

var sethistorialaprove = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/historialaprove.html", () => {
        sessionVerificationForVisualization()
        historialAprovedVerification()
    })
}

var sethistorialfailed = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/historialfailed.html", () => {
        sessionVerificationForVisualization()
        historialFailedVerification()
    })
}

var setSeeMyProjects = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/seeproject.html", () => {
        sessionVerificationForVisualization()
        seeMyProjects()
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
        seeMyAproveds()
    })
}