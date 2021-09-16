var getCurrentAccount = async () => {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    return accounts[0]
}

ethereum.on('accountsChanged', accounts => {
    console.log("la cuenta cambió")
    metamaskIsAviable()
    buttonStatus("pethereum-adress","value",accounts[0])
})

var accountForProject = async () => {
    metamaskIsAviable()
    var curaccount = await getCurrentAccount()
    buttonStatus("pethereum-adress","value",curaccount)
}