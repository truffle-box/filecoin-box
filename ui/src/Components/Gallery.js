import React, { useState, useEffect } from "react";
import ItemThumb from './ItemThumb';
import { Columns } from 'react-bulma-components';
import { BigNumber } from "ethers";

const Gallery = ({contract, ipfsGateway, limit}) => {
  const [metadataUrl, setMetadataUrl] = useState(`Loading...`);
  const [galleryItems, setGalleryItems] = useState([]);

  const times = n => f => {
    let iter = i => {
      if (i === n) return
      f (i)
      iter (i + 1)
    }
    return iter (0)
  }

  const getSupply = async () => {
    try {
      const galleryContract = contract;
      const totalSupplyHex = await galleryContract.totalSupply();
      const totalSupply = BigNumber.from(totalSupplyHex).toNumber();

      times (totalSupply) (async (i) => {
        const tokenIdHex = await galleryContract.tokenByIndex(i);
        const tokenId = BigNumber.from(tokenIdHex).toNumber();

        const metadataUri = await galleryContract.tokenURI(tokenId);

        const newItem = (
          <Columns.Column key={i}>
            <ItemThumb metadataUri={metadataUri} ipfsGateway={ipfsGateway} />
          </Columns.Column>
        );

        setGalleryItems((prev) => {
          return [...prev, newItem];
        });
  
        setMetadataUrl(metadataUrl);
      });

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getSupply();
  }, []);

  return (
    <Columns>
      {galleryItems}
    </Columns>
  );
};

export default Gallery;
