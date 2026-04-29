# 🚀 Demo

## 🔴 Before (ethers v5)

```js
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider();
const hash = ethers.utils.keccak256("hola");
const value = ethers.BigNumber.from("1000");
const eth = ethers.utils.parseEther("1.0");

const result = contract.callStatic.transfer(100);