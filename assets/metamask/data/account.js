var getCurrentAccount = async function (){
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0]
    return account
}
