// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

// create contract
contract HelloWorld {
    address public contract_owner;
  string public message;

  // constructor
  constructor (string memory _msg){
    // set message and constructor
    message = _msg;
    contract_owner = msg.sender;
  }
  function hello() public pure returns (string memory) {
    return "hello world original";
  }
  function getMessage() public view returns (string memory) {
    return message;
  }
//   method for setting the message
  function setMessage(string memory _msg) public {
    // only contract owner can change the message
     require(msg.sender == contract_owner);
     message = _msg;
  }
}
