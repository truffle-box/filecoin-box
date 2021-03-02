# Filecoin Box

## Installation

> Note that this installation command will only work once the box is published (in the interim you can use `truffle unbox https://github.com/truffle-box/filecoin-box`).

```
truffle unbox filecoin
```

## Setup

### Running Filecoin Ganache

Once installed, you can run Filecoin Ganache with the following command (note that this requires NPM version 5.2 or above)

```
npx ganache filecoin
```

This creates 10 accounts, each loaded with 100 FIL, and display both their account addresses and associated private keys.

```
Available Accounts
==================
(0) t3rvcqmc5otc3sh3cngqg2ttzcu7ezpco466lbafzaoygxvnzsw7e7n2zbjwhiv5fdzhs6uxm2qckwt6lp5wga (100 FIL)
(1) t3s3la37547tijmoeiep7ktogws3tep2eqrralh7rhi2mpe46q574gceyy467356onblzvwf7ejlelo2rdsg4q (100 FIL)
(2) t3wk7a46e2dcqb7qxeuz2zq7wodwycdgtbgdpr37hhvelfilf5yvssg5xbsolgusqsumomtmtqhnobh4carhyq (100 FIL)
...
```

It also starts the Lotus and IPFS daemons running over `http` and `ws` respectively:

```
Lotus RPC listening on 127.0.0.1:7777
IPFS  RPC listening on 127.0.0.1:5001
```

### Running the Filecoin Network Explorer

> Note that these steps will be changing (merging branch into master / main, webpack, truffle plugin, etc).

```
git clone https://github.com/trufflesuite/filecoin-network-inspector
yarn
git checkout ganache-changes
yarn start
```

Assuming it's running correctly, you can open the Filecoin Network Explorer at the following: http://localhost:3000

### GUI

TBD

## Uploading a File

To upload a file navigate to the "Market" tab and click "Choose File". TODO - include details on the concept of a deal...

Alternatively, you can send the following curl request directly to the Lotus RPC...

```
...
```

## Resources

- [@ganache/filecoin](https://www.npmjs.com/package/@ganache/filecoin)
- [Demo](https://www.youtube.com/watch?v=mB1odTv6-3k&feature=youtu.be)