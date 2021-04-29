
var metamaskIsAviable = async function () {
    if (typeof window.ethereum !== 'undefined') {
        try {
            console.log("Esta conectado")
        } catch (error) {
            if (error.code === 4001) {
                console.log("Rechazó la conexión")
            }
        }
    } else {
        console.log("install metamask")
    } 
}



