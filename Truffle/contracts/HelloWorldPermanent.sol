// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
// create HelloWorldPermanent contract
contract HelloWorldPermanent{
  string public message_value;
  constructor(string memory _msg){
    message_value = _msg;
  }
}