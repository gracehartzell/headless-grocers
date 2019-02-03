import React from 'react';
import PropTypes from 'prop-types';
import { Input, SearchForm } from './style/Index';

const propTypes = {
  handleSubmit: PropTypes.func,
};

export default class SearchBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.inputRef = React.createRef();
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
      <SearchForm onSubmit={this.handleSubmit}>
        <label>
          Search Yummly Recipes:
          <Input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            className="form-control"
            placeholder="e.g. tikka masala or dragonfruit"
            ref={this.inputRef}
            onMouseEnter={() => {
              this.inputRef.current.focus();
            }}
            onMouseLeave={() => {
              this.inputRef.current.blur();
            }}
          />
        </label>
      </SearchForm>
    );
  }
}

SearchBar.propTypes = propTypes;
