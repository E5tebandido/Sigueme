$(document).ready(function()
{
    firebaseInit()
    contentLoader("navsco","navbar.html")
    $("#setentity").on("click",function(event)
    {
        contentLoader("contentpage","newentity.html")
    })
    $("#setproject").on("click",function(event)
    {
        contentLoader("contentpage","newproject.html")
    })
    $("#home").on("click",function(event)
    {
        contentLoader("contentpage","index.html")
    })
    $("#donation").on("click",function(event)
    {
        contentLoader("contentpage","transaction.html")
    })
})