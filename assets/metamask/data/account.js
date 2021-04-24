var getCurrentAccount = async function (){
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
}