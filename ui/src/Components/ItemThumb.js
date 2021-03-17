import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Box, Image } from 'react-bulma-components';

const Frame = styled.img({
  border: "solid 10px #292A2D",
  minWidth: "100%"
});

const Title = styled.h2({
  color: "#242424",
  fontWeight: "bold",
  fontSize: "1.4rem",
  marginTop: "0.3rem"
});

const Details = styled.h5({
  color: "#292A2D"
});

const ItemThumb = ({metadataUri, ipfsGateway}) => {
  const [title, setTitle] = useState(`Loading...`);
  const [vintage, setVintage] = useState(`Loading...`);
  const [author, setAuthor] = useState(`Loading...`);
  const [imageUrl, setImageUrl] = useState(`/`);
  const [thumbnailUrl, setThumbnailUrl] = useState(``);

  const getMetadata = async () => {
    try {
      const res = await fetch(`${metadataUri}`);
      const metadata = await res.json();

      setTitle(metadata.title);
      setVintage((new Date(metadata.vintage)).getFullYear());
      setAuthor(metadata.author);
      setImageUrl(`${ipfsGateway}/${metadata.thumbnail}`);
      setThumbnailUrl(`/item/${metadata.media}`)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMetadata();
  }, [getMetadata]);

  return (
    <Link to={thumbnailUrl}>
      <Box>
        <Image 
          src={`${imageUrl}`}
          style={{"minWidth": "100%"}}
        />
        <Title>{title}</Title>
        <Details><strong>{author}</strong>, {vintage}</Details>
      </Box>
    </Link>
  );
};

export default ItemThumb;
