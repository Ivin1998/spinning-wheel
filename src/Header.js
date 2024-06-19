import React from 'react';
import { Navbar,Container } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
  
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Spin the wheel</Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header;
