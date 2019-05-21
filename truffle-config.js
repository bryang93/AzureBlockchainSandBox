const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    firstexperience: {
      network_id: "*",
      gas: 0,
      gasPrice: 0,
      provider: new HDWalletProvider(fs.readFileSync('c:\\Users\\braya\\source\\repos\\FirstSolidityProject\\MnemonicHelloBlockchain.env', 'utf-8'), "https://firstblockchain.blockchain.azure.com:3200/orjNdZvARFl9VUyeC6kz-tA8"),
      consortium_id: 1558448678036
    }
  },
  mocha: {},
  compilers: {
    solc: {}
  }
};
