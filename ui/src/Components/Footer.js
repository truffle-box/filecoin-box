import { Footer as BulmaFooter, Container, Content } from 'react-bulma-components';

const Footer = () => {
  return (
        <BulmaFooter>
          <Container>
            <Content style={{ textAlign: 'center' }}>
              <p>
                Discover <strong><a href="https://docs.filecoin.io">Filecoin</a></strong> 
              </p>
            </Content>
          </Container>
        </BulmaFooter>
  );
};

export default Footer;