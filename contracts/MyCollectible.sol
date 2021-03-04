// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyGallery is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _id;

    constructor() ERC721("MyGallery", "MCO") public {
        _setBaseURI("https://ipfs.io/ipfs/");
    }

    function mint(address owner, string memory cid) public returns (uint256)
    {
        _id.increment();

        uint256 newId = _id.current();
        _mint(owner, newId);
        _setTokenURI(newId, cid);

        return newId;
    }
}
