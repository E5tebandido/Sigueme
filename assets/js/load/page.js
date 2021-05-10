$(document).ready(function()
{
    firebaseInit()
    contentLoader("contentpage","templates/home.html")
    contentLoader("navsco","templates/navbar.html")
    loadSideNav()
})

var setnewentityview = () => {
    contentLoader("contentpage","templates/newentity.html")
}

var setnewprojectview = () => {
    contentLoader("contentpage","templates/newproject.html")
}

var settransactionview = (address) => {
    loading("loadspin")
    contentLoader("contentpage","templates/transaction.html")
    console.log(address)
    setTimeout(setAddress, 3000, address)
}

var sethomeview = () => {
    Materialize.toast('Al inicio', 1000)
    contentLoader("contentpage","templates/home.html")
}

var setseeprojectview = () => {
    loading("loadspin")
    contentLoader("contentpage","templates/seeproject.html")    
    setTimeout(checkForProjects, 3000)
}

