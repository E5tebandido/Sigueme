var getCurrentAccount = async function (){
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    updateraccount("assets/json/web3account.json",accounts[0])
    return accounts[0];
}

ethereum.on('accountsChanged', function (accounts) {
    updateraccount("assets/json/web3account.json",accounts[0])
    return accounts[0]
});