
var metamaskIsAviable = async function () {
    if (typeof window.ethereum !== 'undefined') {
        try {
            Materialize.toast('Metamask está disponible', 3000)
        } catch (error) {
            Materialize.toast('Metamask error :' + error.message, 3000)
        }
    } else {
        Materialize.toast('Instala metamask', 5000)
    } 
}



