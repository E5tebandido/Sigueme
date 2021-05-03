
var metamaskIsAviable = async function () {
    if (typeof window.ethereum !== 'undefined') {
        try {
            console.log("Metamask está disponible en este navegador")

        } catch (error) {
            console.log(error.message)
        }
    } else {
        console.log("install metamask")
    } 
}



