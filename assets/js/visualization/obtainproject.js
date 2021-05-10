

$(document).on('click', '.btnpro', function (event) {
    specificProjectRule('project',event.target.id)
});

var setAddress = (address) => {
    stopping("loadspin")
    $("#p_address").val(address)
}