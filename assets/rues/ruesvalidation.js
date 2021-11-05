var ruesValidation = () => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "API-KEY");
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };
    fetch("https://apitude.co/api/v1.0/requests/rues-co/e0606c19-a32d-410f-b2eb-d57a665677bc/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error))
}
