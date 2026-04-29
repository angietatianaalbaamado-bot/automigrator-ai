import { ethers } from "ethers";

const provider = new ethers.JsonRpcProvider();
const hash = ethers.keccak256(ethers.toUtf8Bytes("hola"));