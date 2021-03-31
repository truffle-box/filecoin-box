# Filecoin Gallery

## Local Setup

To run locally, simply the follow the instructions in the comments in `ui/src/App.js`...

```
// TODO - comment the following two lines
const provider = new ethers.providers.InfuraProvider("rinkeby");
const myGallery = "0x8408acB27E7068c29485BC471C681cb30E62aA73";
```

```
// TODO - uncomment the following and update the contract address to that of your local migration
// const provider = new ethers.providers.JsonRpcProvider(`http://localhost:8545`);
// const myGallery = "0x8408acB27E7068c29485BC471C681cb30E62aA73";
```

## Reference

- https://couds.github.io/react-bulma-components/?path=/story/container--default
- https://docs.ethers.io/v5/
- https://docs.openzeppelin.com/contracts/2.x/api/token/erc721