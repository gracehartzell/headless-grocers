import React from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Instacart from './Instacart';
import logo from '../images/logo.png';

const AppLogo = styled.img`
  height: 50px;
  width: 55px;
  z-index: 99;
  margin-right: 10px;
`;

/* eslint-disable react/prefer-stateless-function */
export default class Nav extends React.PureComponent {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <AppLogo src={logo} alt="logo" />
          {'Headless Grocers'}
        </Navbar.Brand>
        <Instacart className="justify-content-end" />
      </Navbar>
    );
  }
}
