module.exports = {
  "remove-providers-path": {
    rule: { pattern: "ethers.providers.$MEMBER" },
    fix: "ethers.$MEMBER"
  },
  "web3provider-to-browserprovider": {
    rule: { pattern: "ethers.Web3Provider" },
    fix: "ethers.BrowserProvider"
  },
  "callstatic-to-staticcall": {
    rule: { pattern: "$CONTRACT.callStatic.$METHOD($ARGS)" },
    fix: "$CONTRACT.$METHOD.staticCall($ARGS)"
  },

  // 🔥 NUEVAS REGLAS
  "bignumber-to-bigint": {
    rule: { pattern: "ethers.BigNumber.from($VAL)" },
    fix: "BigInt($VAL)"
  },
  "utils-parseether": {
    rule: { pattern: "ethers.utils.parseEther($VAL)" },
    fix: "ethers.parseEther($VAL)"
  },
  "utils-formatether": {
    rule: { pattern: "ethers.utils.formatEther($VAL)" },
    fix: "ethers.formatEther($VAL)"
  }
};