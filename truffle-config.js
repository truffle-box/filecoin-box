const HDWalletProvider = require('@truffle/hdwallet-provider');

const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {

  networks: {
    development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*",
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/2dff8c51ac3a4c71bf865f79ddc4e0ca`),
      network_id: 4,
      gas: 5500000,
      skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },

  compilers: {
    solc: {
      version: "0.6.2",
    }
  },
  plugins: [
    "filecoin-plugin",
  ]
}
