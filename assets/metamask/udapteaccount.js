var updateraccount = function (url, newaccount) {
    $.getJSON(url,function(data) {
        data.currentaccount = newaccount
        console.log(data.currentaccount)
    });
}

