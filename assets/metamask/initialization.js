
async function metamaskInit(){
    if (window.ethereum) {
        try {
            web3 = new Web3(window.ethereum)
        } catch (error) {
            if (error.code === 4001) {
                console.log("user rejected")
            }
        }
    } else {
        alert("install metamask")
    }  
}






