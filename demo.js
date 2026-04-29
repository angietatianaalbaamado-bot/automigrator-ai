const provider = new ethers.JsonRpcProvider();
const value = BigInt("1000");
const eth = ethers.parseEther("1.0");
const result = contract.transfer.staticCall(100);