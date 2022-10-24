const HelloWorld = artifacts.require('HelloWorld')
contract("HelloWorld", (accounts)=>{
    it("constructor of HelloWorld", async ()=>{
        let inst = await HelloWorld.deployed();
        let msg = await inst.hello();
        assert.equal(msg, "hello world original");
    })
    it("set message using owner", async ()=>{
        let newMsg = "new message using test cases";
        let inst = await HelloWorld.deployed();
        await inst.setMessage(newMsg);
        let msg = await inst.getMessage();
        assert.equal(msg, newMsg);
    })
})