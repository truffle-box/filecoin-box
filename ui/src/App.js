import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container } from 'react-bulma-components';
import {
  Switch,
  Route,
} from "react-router-dom";

import { ethers } from "ethers";

import Home from './Pages/Home';
import ItemView from './Pages/ItemView';
import AllItems from './Pages/AllItems';
import Contact from './Pages/Contact';
import About from './Pages/About';

import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

const ipfsGateway = `https://ipfs.io/ipfs`;

const provider = new ethers.providers.JsonRpcProvider(`http://localhost:8545`);
const myGallery = "0x8408acB27E7068c29485BC471C681cb30E62aA73";

const galleryAbi = [
  "function totalSupply() view returns (uint)",
  "function tokenByIndex(uint) view returns (uint)",
  "function tokenURI(uint) view returns (string)"
];
const contract = new ethers.Contract(myGallery, galleryAbi, provider);

function App() {
  return (
      <Container>
        <Switch>
          <Route path="/" exact>
            <Navigation />
              <Home contract={contract} ipfsGateway={ipfsGateway} />
            <Footer />
          </Route>
          <Route path="/item/:itemId">
            <Navigation />
              <ItemView ipfsGateway={ipfsGateway} />
            <Footer />
          </Route>
          <Route path="/contact">
            <Navigation />
              <Contact />
            <Footer />
          </Route>
          <Route path="/about">
            <Navigation />
              <About />
            <Footer />
          </Route>
          <Route path="/all">
            <Navigation />
              <AllItems contract={contract} ipfsGateway={ipfsGateway} />
            <Footer />
          </Route>
        </Switch>
      </Container>
  );
}

export default App;
