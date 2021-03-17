import { Columns, Heading, Section,  } from 'react-bulma-components';

import Hero from '../Components/Hero';
import Gallery from '../Components/Gallery';

const Home = ({contract, ipfsGateway}) => {

  return (
    <Section>
      <Hero />
      <Heading size={5} renderAs="h1">Latest Items</Heading>
      <Columns>
        <Gallery contract={contract} ipfsGateway={ipfsGateway} limit={3} />
      </Columns>
    </Section>
  )
};

export default Home;