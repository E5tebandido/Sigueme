

$(document).on('click', '.btnpro', function (event) {
    specificProject('project',event.target.id)
});

var renderOneProject = async function (address){
    await contentLoader("contentpage","templates/transaction.html")
    $("#project_address").val("hola")
}