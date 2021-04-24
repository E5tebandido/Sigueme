$(document).ready(function()
{
    firebaseInit()
    contentLoader("contentpage","templates/home.html")
    contentLoader("navsco","templates/navbar.html")
    $('.button-collapse').sideNav({
        menuWidth: 300, 
        edge: 'left', 
        closeOnClick: false, 
        draggable: true
    });
})

var setnewentityview = function(){
        contentLoader("contentpage","templates/newentity.html")
}

var setnewprojectview = function(){
    contentLoader("contentpage","templates/newproject.html")
}

var settransactionview = function(){
    contentLoader("contentpage","templates/transaction.html")
}

var sethomeview = function(){
    contentLoader("contentpage","templates/home.html")
}

async function metamaskconnection (){
    metamaskInit()
}
