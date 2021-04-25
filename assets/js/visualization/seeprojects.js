var chechForProjects = function() {
    projectReciever('project')
}

var renderProjects = function (name,address){
    console.log(name,address)
    $("table tbody").append('<tr>')
    .append("<td>"+name+"</td>")
    .append("<td>"+address+"</td>")
    .append('<td><a href="www.google.com">address<a></td>')
    .append('<tr>')
}