$(document).on('click', '.btnpro', function (event) {
    console.log(event.target.id)
    deleteProjectVerification(event.target.id)
});