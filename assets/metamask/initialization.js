
var metamaskIsAviable = async function () {
    if (typeof window.ethereum !== 'undefined') {
        try {
            console.log('Metamask está disponible')
        } catch (error) {
            console.log('Metamask error :' + error.message)
        }
    } else {
        Materialize.toast('Instala metamask', 5000)
        window.location.href = "https://metamask.io/download.html"
    } 
}


