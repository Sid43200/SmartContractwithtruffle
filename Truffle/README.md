### Truffle Tutorial for Beginners - Installation, Contract Creation (1/4)

- Install truffle globally on the system
```sh
npm install truffle -g
```
- Initialise the project
```sh
npm init
```
```sh
Starting init...
================
> Copying project files to /Users/Desktop/Truffle

Init successful, sweet!
Try our scaffold commands to get started:
  $ truffle create contract YourContractName # scaffold a contract
  $ truffle create test YourTestName         # scaffold a test
http://trufflesuite.com/docs
```
- Create a contract
- For performing migrations we need to run
```sh
truffle develop
migrate
```

### Truffle Tutorial for Beginners - Migrations, Deployment (2/4)t

- Make modification inside Helloworld contract by adding a constructor setMessage and getMessage method

```sh
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
```
- Add default value to set using constructor
- Deploy and interact with the contract.

### Interaction between the contract
- Create a new contract ie. HelloWorldPermanent
```sh
// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
contract HelloWorldPermanent{
  string public message_value;
  constructor(string memory _msg){
    message_value = _msg;
  }
}
```
- Update migrations to include the HelloworldPermanent contact inside 2_hellow_world migration file.
```sh
truffle(develop)> ins.message_value()
'original hello world'
truffle(develop)> 
```

## Truffle Tutorial for Beginners - Testing (3/4)
- Create test files for Helloworld
- Run test cases
```sh
Using network 'test'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.


  Contract: HelloWorld
    ✔ constructor of HelloWorld
    ✔ set message using owner (63ms)


  2 passing (161ms)
```

## Truffle Tutorial for Beginners - Deploy to Testnet & Mainnet (4/4)
We have used geroli testnet for deployment
- Install @truffle/hdwallet-provider
- Generate mnemonic and test on testnet network
