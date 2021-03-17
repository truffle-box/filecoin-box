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

// const provider = new ethers.providers.JsonRpcProvider(`http://localhost:9545`);
const provider = new ethers.providers.InfuraProvider("rinkeby");

// const myGallery = "0x340Abe0afeA54bDd3e4ad48BED039F4deF8eC545";
const myGallery = "0x6cb457d583340099CadcBde4E05Eaa32488a6027";

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
