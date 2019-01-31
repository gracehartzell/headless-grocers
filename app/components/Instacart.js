import React from 'react';
import Button from 'react-bootstrap/Button';

/* eslint-disable react/prefer-stateless-function */
export default class Instacart extends React.PureComponent {
  render() {
    return (
      <Button
        variant="success"
        href="https://www.instacart.com/store/checkout_v3"
      >
        View Instacart Cart
      </Button>
    );
  }
}
