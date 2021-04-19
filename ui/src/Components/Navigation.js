import { Navbar } from 'react-bulma-components';
import styled from 'styled-components';

import {
  Link
} from "react-router-dom";

const StyledLink = styled(Link)`
  color: #4a4a4a;
`;

const Navigation = () => {
  return (
      <Navbar
        active={true}
        transparent={true}
      >
      <Navbar.Brand>
        <Navbar.Item renderAs="span">
          <Link to="/">
            <img src="/filecoin-box/logo.png" alt="Filecoin Gallery" width="112" height="28" />
          </Link>
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu >
        <Navbar.Container>
          <Navbar.Item renderAs="span">
            <StyledLink to="/">
              Home
            </StyledLink>
          </Navbar.Item>
          <Navbar.Item dropdown hoverable href="#">
            <Navbar.Link arrowless={false}>
              Explore
            </Navbar.Link>
            <Navbar.Dropdown>
              <Navbar.Item renderAs="span">
                <StyledLink to="/all">
                  All Items
                </StyledLink>
              </Navbar.Item>
              <Navbar.Item renderAs="span">
                <StyledLink to="/about">
                  About
                </StyledLink>
              </Navbar.Item>
            </Navbar.Dropdown>
          </Navbar.Item>
        </Navbar.Container>
        <Navbar.Container position="end">
          <Navbar.Item renderAs="span">
            <StyledLink to="/contact">
              Contact
            </StyledLink>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};

export default Navigation;