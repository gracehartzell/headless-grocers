import React from 'react';

/* eslint-disable */
export default class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  handleSubmit = event => {
    event.preventDefault();
    const text = event.target.text.value;
    this.props.handleSubmit(text);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          className="form-control"
          type="text"
          placeholder="Enter something tasty"
        />
      </form>
    );
  }
}
