var loadIcon = () => {
    var mydata = [];
    $.ajax({
    url: '../../../assets/json/icons.json',
    async: false,
    dataType: 'json',
    success: (json) => {
        mydata = json.icons;
    }
    })
    return mydata[Math.floor(Math.random() *mydata.length)].name
}
