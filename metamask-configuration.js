async function metamaskInit(){
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
    }else{
        alert("instale metamask")
    }
    var contractAddress = '0x3532B35AA191b1e8fB047Fcb2a8219c6D94804cF';
    const abi = JSON.parse ('[  {   "constant": false,   "inputs": [    {     "name": "_id",     "type": "string"    },    {     "name": "_name",     "type": "string"    }   ],   "name": "setEntity",   "outputs": [],   "payable": false,   "stateMutability": "nonpayable",   "type": "function"  },  {   "constant": false,   "inputs": [    {     "name": "_id",     "type": "string"    },    {     "name": "_status",     "type": "bool"    }   ],   "name": "setEntityStatus",   "outputs": [],   "payable": false,   "stateMutability": "nonpayable",   "type": "function"  },  {   "constant": false,   "inputs": [    {     "name": "_id",     "type": "string"    },    {     "name": "_address",     "type": "address"    },    {     "name": "_name",     "type": "string"    }   ],   "name": "setProject",   "outputs": [],   "payable": false,   "stateMutability": "nonpayable",   "type": "function"  },  {   "constant": false,   "inputs": [    {     "name": "_id",     "type": "string"    },    {     "name": "_address",     "type": "address"    },    {     "name": "_status",     "type": "bool"    }   ],   "name": "setProjectStatus",   "outputs": [],   "payable": false,   "stateMutability": "nonpayable",   "type": "function"  },  {   "constant": false,   "inputs": [    {     "name": "_amount",     "type": "uint256"    },    {     "name": "_id",     "type": "string"    },    {     "name": "_address",     "type": "address"    }   ],   "name": "transfer",   "outputs": [],   "payable": true,   "stateMutability": "payable",   "type": "function"  },  {   "payable": true,   "stateMutability": "payable",   "type": "fallback"  },  {   "inputs": [],   "payable": false,   "stateMutability": "nonpayable",   "type": "constructor"  },  {   "constant": true,   "inputs": [    {     "name": "_id",     "type": "string"    }   ],   "name": "getEntity",   "outputs": [    {     "name": "",     "type": "string"    },    {     "name": "",     "type": "string"    },    {     "name": "",     "type": "bool"    }   ],   "payable": false,   "stateMutability": "view",   "type": "function"  },  {   "constant": true,   "inputs": [    {     "name": "_id",     "type": "string"    },    {     "name": "_address",     "type": "address"    }   ],   "name": "getProject",   "outputs": [    {     "name": "",     "type": "string"    },    {     "name": "",     "type": "address"    },    {     "name": "",     "type": "bool"    },    {     "name": "",     "type": "uint256"    }   ],   "payable": false,   "stateMutability": "view",   "type": "function"  } ]');
    window.contract = new window.web3.eth.Contract(abi, contractAddress);
}

async function getCurrentAccount() {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];
}






