import { Columns, Container, Heading, Section,  } from 'react-bulma-components';

import Hero from '../Components/Hero';

const Contact = () => {

  return (
    <Section>
      <Hero />
      <Heading size={5} renderAs="h1">Contact Us</Heading>
      <p>Get in touch with us at xyz.</p>
    </Section>
  )
};

export default Contact;