module.exports = {

  networks: {
    development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*",
    }
  },

  environments: {
    development: {
      ipfs: {
        address: "http://127.0.0.1:5001", // defaults to local IPFS node
      },
      filecoin: {
        address: "http://localhost:7777/rpc/v0", // defaults to ganache / local Filecoin node
        // token: "FILECOIN_NODE_AUTH_TOKEN",
        storageDealOptions: {
          epochPrice: "2500",
          duration: 518400,
        }
      },
      buckets: {
        key: "MY_BUCKETS_KEY",
        secret: "MY_BUCKETS_SECRET",
        bucketName: "MY_BUCKET_NAME",
      }
    }
  },

  compilers: {
    solc: {
      version: "0.6.2",
    }
  },
  plugins: [
	"truffle-plugin-debugger"
  ]
}
