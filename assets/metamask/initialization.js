
const metamaskIsAviable = () => {
    if (window.ethereum !== 'undefined') {
        web3 = new Web3(web3.currentProvider)
    } else {
        window.open("https://metamask.io/download.html","_blank")
    } 
}


