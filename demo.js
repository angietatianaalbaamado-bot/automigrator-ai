import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider();
const hash = ethers.keccak256("hola");
const value = ethers.BigInt.from("1000");
const eth = ethers.parseEther("1.0");

const result = contract.callStatic.transfer(100);