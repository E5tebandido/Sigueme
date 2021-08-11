
var metamaskIsAviable = async function () {
    if (typeof window.ethereum !== 'undefined') {
        try {
            Materialize.toast('Metamask está disponible',2000,'green')
        } catch (error) {
            Materialize.toast('Metamask error :' + error.message,2000,'red')
        }
    } else {
        Materialize.toast('Instala metamask', 5000, 'yellow')
        window.location.href = "https://metamask.io/download.html"
    } 
}


