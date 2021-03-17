import { Columns, Hero, Image, Section } from 'react-bulma-components';

import {
  useParams
} from "react-router-dom";

const ItemView = ({ipfsGateway}) => {

  let { itemId } = useParams();

  return (
    <Section>
      <Hero />
      <Columns>
        <Image 
          src={`${ipfsGateway}/${itemId}`}
        />
      </Columns>
    </Section>
  );
};

export default ItemView;