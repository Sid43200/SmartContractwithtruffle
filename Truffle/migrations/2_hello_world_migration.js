const HelloWorld = artifacts.require('HelloWorld')
const HelloWorldPermanent = artifacts.require('HelloWorldPermanent')
module.exports = function(deployer) {
  deployer.deploy(HelloWorld, "original hello world").then(async()=>{
    let HelloworldInstance = await HelloWorld.deployed();
    let msg = HelloworldInstance.getMessage();
    return deployer.deploy(HelloWorldPermanent, msg);
  })
};