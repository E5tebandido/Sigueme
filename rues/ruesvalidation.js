var ruesValidation = (ongdata) => {
    var config = {
        method: 'post',
        url: 'https://api.misdatos.com.co/api/co/rues/consultarEmpresaPorNit',
        headers: { 
        'Access-Control-Allow-Origin':'*',
        'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnRJZCI6IjYxOGFkYzIyNDE1NjFiNTZjN2ZjNGYzMiIsInYiOjEsInJvbGUiOiJjbGllbnQiLCJwbGFuIjoiNjE2ZWVhNzc2MjEwZjY5NDkyZGY4MzNjIiwiaWF0IjoxNjM2NDkwMjc0fQ.WjOA3elxKJT9P5qdFI4FNey4nhaEkDfjfUyHReNh8IU ', 
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : 'nit=901331380'
    }
    axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    })
}

'curl --location --request POST "https://api.misdatos.com.co/api/co/rues/consultarEmpresaPorNit" \--header "Authorization: xxxxxxxxxxxxxxxxxxxx" \--header "Content-Type: application/x-www-form-urlencoded" \--data-urlencode "nit=901331380" '