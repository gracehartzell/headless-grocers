import React from 'react';

/* eslint-disable */
export default class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.value);
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search Yummly Recipes:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            className="form-control"
            placeholder="e.g. tikka masala or dragonfruit"
          />
        </label>
      </form>
    );
  }
}
