
const metamaskInitializationForAddress = async () => {
    if (typeof web3 !== 'undefined') {
        Materialize.toast('Metamask está instalado', 2000, 'green')
        await accountForProject()
      } else {
        Materialize.toast('Metamask no está instalado', 2000, 'red')
        window.open('https://metamask.io/download', '_blank').focus()
      }
}

const metamaskInitializationForContract = async () => {
    if (typeof web3 !== 'undefined') {
        Materialize.toast('Metamask está instalado', 2000, 'green')
        await newContract()
      } else {
        Materialize.toast('Metamask no está instalado', 2000, 'red')
        window.open('https://metamask.io/download', '_blank').focus()
      }
}

