$(document).ready(function()
{
    firebaseInit()
    contentLoader("contentpage","templates/home.html")
    contentLoader("navsco","templates/navbar.html")
    loadSideNav()
})

var setnewentityview = async function (){
    await contentLoader("contentpage","templates/newentity.html")
}

var setnewprojectview = async function(){
    await contentLoader("contentpage","templates/newproject.html")
}

var settransactionview = async function(){
    await contentLoader("contentpage","templates/transaction.html")
}

var sethomeview = async function(){
    await contentLoader("contentpage","templates/home.html")
}

var setseeprojectview = async function(){
    await contentLoader("contentpage","templates/seeproject.html")
    await chechForProjects()
}

