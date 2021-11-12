var getCurrentAccount = async () => {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    return accounts[0]
}

var accountForProject = async () => {
    var curaccount = await getCurrentAccount()
    buttonStatus("pethereum-adress","value",curaccount)
    buttonStatus("pethereum-adress","disabled",true)
}