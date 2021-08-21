$(document).ready(function()
{
    if (!firebase.apps.length) {
        firebaseInit()
    } 
    contentLoader("navsco","templates/navbar.html")
    contentLoader("contentpage","templates/home.html")
    loadSideNav()
    setTimeout(loadDropdown, 2000)  
    setTimeout(sessionVerificationForNavBar, 2000)  
})

var setnewentityview = () => {
    contentLoader("contentpage","templates/newentity.html")
    sessionVerificationForActions()
}

var setnewprojectview = () => {
    contentLoader("contentpage","templates/newproject.html")
    sessionVerificationForActions()
}

var settransactionview = (address,name,balance,location,description,maxfounds,missingfounds) => {
    contentLoader("contentpage","templates/transaction.html")
    console.log(address)
    setTimeout(setAddress, 2000, address,name,balance,location,description,maxfounds,missingfounds)
}

var sethomeview = () => {   
    contentLoader("contentpage","templates/home.html")
}

var setseeprojectview = () => {
    contentLoader("contentpage","templates/seeproject.html")    
    setTimeout(projectStatusVerification, 2000)
}

var sethistorialaprove = () => {
    contentLoader("contentpage","templates/historialaprove.html")    
    setTimeout(historialAprovedVerification, 2000)
}

var sethistorialfailed = () => {
    contentLoader("contentpage","templates/historialfailed.html")    
    setTimeout(historialFailedVerification, 2000)
}

var setProfile = () => {
    contentLoader("contentpage","templates/profile.html")    
    
}
