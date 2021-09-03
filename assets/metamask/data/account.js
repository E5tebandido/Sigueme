var getCurrentAccount = async function (){
    let accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0]
}
