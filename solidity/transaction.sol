// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

contract transaction {
    // Funcion de pago siempre y cuando se cumplan las condiciones y el propietario tenga fondos suficientes
    function make_transaction(uint256 _amount, address _address, bool _entitystatus, bool _projectstatus) public payable {
        require (
            _entitystatus == true,
            "inactive entity"
        );
        require (
            _projectstatus == true,
            "inactive project"
        );
        (bool success,) = address(_address).call{value: _amount}(abi.encodeWithSignature("nonExistingFunction()"));
        require(success,"not founds");
    }
    
   event Received(address, uint);
    receive() external payable {
        
    }
    fallback() external payable {
        emit Received(msg.sender, msg.value);
    }
}