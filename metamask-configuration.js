
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
    var contractAddress = '0x1bCac572D4c6B4ccd6560Fc21A5c002494018313';
    const abi = JSON.parse ('[  {   "anonymous": false,   "inputs": [    {     "indexed": false,     "internalType": "address",     "name": "",     "type": "address"    },    {     "indexed": false,     "internalType": "uint256",     "name": "",     "type": "uint256"    }   ],   "name": "Received",   "type": "event"  },  {   "inputs": [    {     "internalType": "uint256",     "name": "_amount",     "type": "uint256"    },    {     "internalType": "address",     "name": "_address",     "type": "address"    },    {     "internalType": "bool",     "name": "_entitystatus",     "type": "bool"    },    {     "internalType": "bool",     "name": "_projectstatus",     "type": "bool"    }   ],   "name": "make_transaction",   "outputs": [],   "stateMutability": "payable",   "type": "function"  },  {   "stateMutability": "payable",   "type": "receive"  },  {   "stateMutability": "payable",   "type": "fallback"  } ]');
    window.contract = new web3.eth.Contract(abi, contractAddress);
}

async function getCurrentAccount() {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
}






