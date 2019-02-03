import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Instacart from '../Instacart/index';
import { AppLogo } from './style/Index';
import logo from '../../images/logo.png';

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
