import { Columns, Heading, Section,  } from 'react-bulma-components';

import Hero from '../Components/Hero';
import Gallery from '../Components/Gallery';

import { Link } from "react-router-dom";

const AllItems = ({contract, ipfsGateway}) => {
  return (
    <Section>
      <Hero />
      <Heading size={5} renderAs="h1">All Items</Heading>
      <Columns>
        <Gallery contract={contract} ipfsGateway={ipfsGateway} />
      </Columns>
      <p>Want to get your art listed? <Link to="/contact">Get in touch</Link>.</p>
    </Section>
  );
};

export default AllItems;