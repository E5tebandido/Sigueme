$(document).ready( () =>
{
    callFirebase()
    $("#navsco").load("templates/navbar.html", () => {
        loadSideNav()
        loadDropdown()
        sessionVerificationForNavBar()
    })
    sethomeview()
    $('.modal').modal();
})

var sethomeview = () => {   
    clearContainer("contentpage")
    $("#contentpage").load("templates/home.html", () => {
        loadCarousel()
        loadCollapsible()
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
        Materialize.toast('cuenta del proyecto : '+address, 4000, 'blue')
        getOneProject(address,name,balance,location,description,maxfounds,missingfounds)
    })
}


var setseeprojectview = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/seeproject.html", () => {
        $("#projectpanel").empty() 
        projectStatusVerification()
    })
}

var sethistorialaprove = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/historialaprove.html", () => {
        $("#historialaprovepanel").empty() 
        historialAprovedVerification()
    })
}

var sethistorialfailed = () => {
    clearContainer("contentpage")
    $("#contentpage").load("templates/historialfailed.html", () => {
        $("#historialfailedpanel").empty() 
        historialFailedVerification()
    })
}
